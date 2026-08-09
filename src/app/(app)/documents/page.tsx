import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { generatedDocuments } from "@/lib/mock-data";
import { formatDate } from "@/lib/format";

export const metadata = { title: "Documents" };

export default function DocumentsPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Generated documents" description="Point-in-time project profiles and company experience portfolios." />
      <Card>
        <div className="divide-y divide-slate-100">
          {generatedDocuments.map((doc) => (
            <div key={doc.id} className="flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-bold text-slate-950">{doc.name}</p>
                <p className="mt-1 text-xs text-slate-500">{doc.type === "experience_portfolio" ? "Experience portfolio" : "Project profile"} · {doc.projectCount} project{doc.projectCount === 1 ? "" : "s"} · {formatDate(doc.generatedAt)}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold shadow-sm">Preview</button>
                <button className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-sm">Download</button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
