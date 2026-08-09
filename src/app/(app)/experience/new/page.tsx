import { PortfolioBuilder } from "@/components/experience/portfolio-builder";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/lib/mock-data";

export const metadata = { title: "Create portfolio" };

export default function NewExperiencePortfolioPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Create experience portfolio" description="Choose the projects that best demonstrate the company's relevant experience." />
      <PortfolioBuilder projects={projects} />
    </div>
  );
}
