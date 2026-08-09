-- Contractor Experience Vault - RLS direction
-- Version 0.1
-- Draft only. Test all policies against a local/staging Supabase project before production.

alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;
alter table public.projects enable row level security;
alter table public.project_references enable row level security;
alter table public.project_evidence enable row level security;
alter table public.generated_documents enable row level security;

-- Helper: does the current user belong to this organization?
create or replace function public.is_organization_member(target_organization_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.organization_members om
    where om.organization_id = target_organization_id
      and om.user_id = auth.uid()
  );
$$;

revoke all on function public.is_organization_member(uuid) from public;
grant execute on function public.is_organization_member(uuid) to authenticated;

-- Organizations
create policy "members can read organizations"
on public.organizations
for select
to authenticated
using (public.is_organization_member(id));

create policy "members can update organizations"
on public.organizations
for update
to authenticated
using (public.is_organization_member(id))
with check (public.is_organization_member(id));

-- NOTE:
-- Organization creation + initial owner membership should be performed atomically
-- through a controlled server-side function/RPC. Do not rely on a client inserting
-- an organization and membership in separate unrestricted steps.

-- Memberships
create policy "members can read memberships"
on public.organization_members
for select
to authenticated
using (public.is_organization_member(organization_id));

-- Projects
create policy "members can read projects"
on public.projects
for select
to authenticated
using (public.is_organization_member(organization_id));

create policy "members can insert projects"
on public.projects
for insert
to authenticated
with check (public.is_organization_member(organization_id));

create policy "members can update projects"
on public.projects
for update
to authenticated
using (public.is_organization_member(organization_id))
with check (public.is_organization_member(organization_id));

create policy "members can delete projects"
on public.projects
for delete
to authenticated
using (public.is_organization_member(organization_id));

-- References
create policy "members can read project references"
on public.project_references
for select
to authenticated
using (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

create policy "members can insert project references"
on public.project_references
for insert
to authenticated
with check (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

create policy "members can update project references"
on public.project_references
for update
to authenticated
using (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
)
with check (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

create policy "members can delete project references"
on public.project_references
for delete
to authenticated
using (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

-- Evidence
create policy "members can read evidence metadata"
on public.project_evidence
for select
to authenticated
using (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

create policy "members can insert evidence metadata"
on public.project_evidence
for insert
to authenticated
with check (
  uploaded_by = auth.uid()
  and exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

create policy "members can update evidence metadata"
on public.project_evidence
for update
to authenticated
using (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
)
with check (
  exists (
    select 1
    from public.projects p
    where p.id = project_id
      and public.is_organization_member(p.organization_id)
  )
);

-- Generated documents
create policy "members can read generated documents"
on public.generated_documents
for select
to authenticated
using (public.is_organization_member(organization_id));

create policy "members can insert generated documents"
on public.generated_documents
for insert
to authenticated
with check (
  generated_by = auth.uid()
  and public.is_organization_member(organization_id)
);

-- Storage policies are intentionally not included here yet because they depend on
-- the final bucket names and chosen upload path parsing strategy.
