import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectTable } from "@/components/project/project-table";
import { projects } from "@/lib/mock-data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="space-y-7">
      <PageHeader
        title="Projects"
        description="Your reusable record of completed and in-progress project experience."
        actions={<ButtonLink href="/projects/new">Add project</ButtonLink>}
      />
      <Card>
        <div className="flex flex-col gap-3 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-bold text-slate-950">All projects</h2>
            <p className="mt-1 text-xs text-slate-500">{projects.length} demo projects</p>
          </div>
          <input placeholder="Search projects..." className="min-h-10 rounded-lg border border-slate-300 px-3 text-sm outline-none focus:ring-4 focus:ring-slate-100" />
        </div>
        <ProjectTable projects={projects} />
      </Card>
    </div>
  );
}
