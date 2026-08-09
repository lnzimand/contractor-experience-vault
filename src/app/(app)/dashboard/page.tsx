import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectTable } from "@/components/project/project-table";
import { formatCurrency } from "@/lib/format";
import { getProjectCompleteness } from "@/lib/evidence";
import { organization, projects } from "@/lib/mock-data";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const totalValue = projects.reduce((sum, project) => sum + (project.contractValue ?? 0), 0);
  const completeProjects = projects.filter((project) => getProjectCompleteness(project).every((item) => item.complete)).length;
  const needsAttention = projects.length - completeProjects;

  const stats = [
    ["Recorded projects", String(projects.length)],
    ["Recorded project value", formatCurrency(totalValue)],
    ["Evidence complete", `${completeProjects} projects`],
    ["Needs attention", `${needsAttention} projects`],
  ];

  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow="Workspace"
        title={organization.name}
        description="Your company's completed work, supporting evidence and reusable experience portfolio."
        actions={<ButtonLink href="/projects/new">Add project</ButtonLink>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label} className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
            <p className="mt-3 text-2xl font-black tracking-tight text-slate-950">{value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-bold text-slate-950">Recent projects</h2>
            <p className="mt-1 text-xs text-slate-500">The demo highlights evidence gaps instead of hiding them.</p>
          </div>
          <ButtonLink href="/projects" variant="quiet">View all</ButtonLink>
        </div>
        <ProjectTable projects={projects.slice(0, 5)} />
      </Card>
    </div>
  );
}
