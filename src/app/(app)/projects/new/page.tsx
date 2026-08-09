import { ProjectForm } from "@/components/project/project-form";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "New project" };

export default function NewProjectPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Add project" description="Record the project facts first. Evidence can be added immediately afterwards." />
      <ProjectForm />
    </div>
  );
}
