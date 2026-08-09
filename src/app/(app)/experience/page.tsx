import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { generatedDocuments } from "@/lib/mock-data";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  const portfolios = generatedDocuments.filter((doc) => doc.type === "experience_portfolio");
  return (
    <div className="space-y-7">
      <PageHeader
        title="Experience portfolios"
        description="Select the strongest projects for a specific opportunity and turn them into a reusable branded experience document."
        actions={<ButtonLink href="/experience/new">Create portfolio</ButtonLink>}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolios.map((doc) => (
          <Card key={doc.id} className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Experience portfolio</p>
            <h2 className="mt-2 font-bold text-slate-950">{doc.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{doc.projectCount} projects · Generated {formatDate(doc.generatedAt)}</p>
            <button className="mt-5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold shadow-sm">Open document</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
