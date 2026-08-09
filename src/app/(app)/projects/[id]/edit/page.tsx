import { notFound } from "next/navigation";
import { ProjectForm } from "@/components/project/project-form";
import { PageHeader } from "@/components/ui/page-header";
import { getProject } from "@/lib/mock-data";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="space-y-7">
      <PageHeader title="Edit project" description={`${project.clientName} · ${project.title}`} />
      <ProjectForm project={project} />
    </div>
  );
}
