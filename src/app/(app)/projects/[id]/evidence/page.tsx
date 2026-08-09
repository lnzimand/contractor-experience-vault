import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { evidenceLabels } from "@/lib/evidence";
import { getProject } from "@/lib/mock-data";

export default async function ProjectEvidencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <div className="space-y-7">
      <PageHeader title="Project evidence" description={`${project.clientName} · ${project.title}`} />

      <Card className="p-5 md:p-6">
        <h2 className="font-bold text-slate-950">Upload evidence</h2>
        <p className="mt-1 text-sm text-slate-500">The production implementation will upload directly to a private Supabase Storage bucket.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-[260px_1fr_auto] md:items-end">
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Evidence type
            <select className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 font-normal">
              {Object.entries(evidenceLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Files
            <input type="file" multiple accept="application/pdf,image/jpeg,image/png,image/webp" className="min-h-11 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 font-normal" />
          </label>
          <button type="button" className="min-h-11 rounded-xl bg-slate-900 px-5 text-sm font-bold text-white">Upload</button>
        </div>
      </Card>

      <Card>
        <div className="border-b border-slate-200 px-5 py-4"><h2 className="font-bold text-slate-950">Current evidence</h2></div>
        <div className="divide-y divide-slate-100">
          {project.evidence.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-sm font-bold text-slate-900">{item.fileName}</p><p className="mt-1 text-xs text-slate-500">{evidenceLabels[item.type]} · {item.sizeLabel}</p></div>
              <div className="flex gap-2"><button className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">Preview</button><button className="rounded-lg px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50">Remove</button></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
