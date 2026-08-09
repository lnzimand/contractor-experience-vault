-- Contractor Experience Vault - V1 draft schema
-- Version 0.1
-- Review before applying to a real Supabase project.

create extension if not exists pgcrypto;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'organization_role') then
    create type public.organization_role as enum ('owner');
  end if;

  if not exists (select 1 from pg_type where typname = 'project_status') then
    create type public.project_status as enum ('draft', 'completed', 'archived');
  end if;

  if not exists (select 1 from pg_type where typname = 'evidence_type') then
    create type public.evidence_type as enum (
      'appointment_letter',
      'contract',
      'purchase_order',
      'completion_certificate',
      'reference_letter',
      'invoice',
      'before_photo',
      'progress_photo',
      'after_photo',
      'other'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'generated_document_type') then
    create type public.generated_document_type as enum (
      'project_profile',
      'experience_portfolio'
    );
  end if;
end $$;

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  registration_number text,
  description text,
  logo_path text,
  email text,
  phone text,
  website text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.organization_role not null default 'owner',
  created_at timestamptz not null default now(),
  unique (organization_id, user_id)
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  title text not null,
  client_name text not null,
  description text not null,
  scope text not null,
  location_text text,
  contract_value numeric(18,2),
  currency char(3) not null default 'ZAR',
  start_date date,
  completion_date date,
  status public.project_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_references (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  name text not null,
  position text,
  company text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_evidence (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  type public.evidence_type not null,
  file_name text not null,
  storage_path text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes >= 0),
  description text,
  uploaded_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.generated_documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  type public.generated_document_type not null,
  storage_path text not null,
  generated_by uuid not null references auth.users(id),
  generated_at timestamptz not null default now(),
  snapshot_data jsonb not null
);

create index if not exists idx_organization_members_user
  on public.organization_members(user_id);

create index if not exists idx_projects_organization
  on public.projects(organization_id);

create index if not exists idx_projects_org_status
  on public.projects(organization_id, status);

create index if not exists idx_project_references_project
  on public.project_references(project_id);

create index if not exists idx_project_evidence_project
  on public.project_evidence(project_id)
  where deleted_at is null;

create index if not exists idx_generated_documents_org
  on public.generated_documents(organization_id, generated_at desc);
