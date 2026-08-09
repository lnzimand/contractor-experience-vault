import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusPill } from "@/components/ui/status-pill";
import { CompletenessCard } from "@/components/project/completeness-card";
import { evidenceLabels } from "@/lib/evidence";
import { formatCurrency, formatDate } from "@/lib/format";
import { getProject } from "@/lib/mock-data";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow={project.clientName}
        title={project.title}
        description={`${project.location} · ${formatCurrency(project.contractValue)}`}
        actions={
          <>
            <ButtonLink href={`/projects/${project.id}/evidence`} variant="secondary">Add evidence</ButtonLink>
            <ButtonLink href={`/projects/${project.id}/edit`}>Edit project</ButtonLink>
          </>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)]">
        <div className="space-y-5">
          <Card className="p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-bold text-slate-950">Project overview</h2>
              <StatusPill status={project.status} />
            </div>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div><dt className="text-slate-500">Client</dt><dd className="mt-1 font-bold text-slate-900">{project.clientName}</dd></div>
              <div><dt className="text-slate-500">Contract value</dt><dd className="mt-1 font-bold text-slate-900">{formatCurrency(project.contractValue)}</dd></div>
              <div><dt className="text-slate-500">Start date</dt><dd className="mt-1 font-bold text-slate-900">{formatDate(project.startDate)}</dd></div>
              <div><dt className="text-slate-500">Completion date</dt><dd className="mt-1 font-bold text-slate-900">{formatDate(project.completionDate)}</dd></div>
            </dl>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Description</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.description}</p>
            </div>
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Scope of work</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.scope}</p>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div><h2 className="font-bold text-slate-950">Evidence</h2><p className="mt-1 text-xs text-slate-500">Files are private in the intended production model.</p></div>
              <ButtonLink href={`/projects/${project.id}/evidence`} variant="quiet">Manage</ButtonLink>
            </div>
            <div className="divide-y divide-slate-100">
              {project.evidence.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                  <div><p className="font-semibold text-slate-900">{item.fileName}</p><p className="mt-1 text-xs text-slate-500">{evidenceLabels[item.type]} · {item.sizeLabel}</p></div>
                  <span className="text-xs font-semibold text-slate-500">Provided</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="font-bold text-slate-950">References</h2>
            {project.references.length ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.references.map((reference) => (
                  <div key={reference.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                    <p className="font-bold text-slate-950">{reference.name}</p>
                    <p className="mt-1 text-slate-600">{reference.position ?? "Reference"}{reference.company ? ` · ${reference.company}` : ""}</p>
                    <p className="mt-3 text-xs text-slate-500">{reference.email ?? reference.phone ?? "No contact details recorded"}</p>
                  </div>
                ))}
              </div>
            ) : <p className="mt-3 text-sm text-amber-700">No project reference has been recorded yet.</p>}
          </Card>
        </div>

        <div className="space-y-5">
          <CompletenessCard project={project} />
          <Card className="p-5">
            <p className="text-sm font-bold text-slate-950">Project profile</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Generate a polished point-in-time project profile for a proposal, company profile or tender response.</p>
            <button type="button" className="mt-4 min-h-10 w-full rounded-lg bg-slate-900 px-4 text-sm font-bold text-white shadow-sm">Generate profile PDF</button>
          </Card>
        </div>
      </div>
    </div>
  );
}
