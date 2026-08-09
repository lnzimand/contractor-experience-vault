import { Card } from "@/components/ui/card";
import { formatCurrency, formatDate } from "@/lib/format";
import { projects, organization } from "@/lib/mock-data";

export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const project = projects[0];

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Shared project profile</p><p className="mt-1 text-sm font-semibold text-slate-700">{organization.name}</p></div>
          <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">Demo token: {token.slice(0, 8)}</span>
        </div>
        <Card className="overflow-hidden">
          <div className="bg-slate-950 p-7 text-white md:p-10">
            <p className="text-sm font-semibold text-slate-300">{project.clientName}</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{project.title}</h1>
            <p className="mt-3 text-slate-300">{project.location} · {formatCurrency(project.contractValue)}</p>
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
            <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Scope</p><p className="mt-2 text-sm leading-6 text-slate-700">{project.scope}</p></div>
            <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Delivery</p><p className="mt-2 text-sm leading-6 text-slate-700">Started {formatDate(project.startDate)}<br />Completed {formatDate(project.completionDate)}</p></div>
          </div>
        </Card>
        <p className="text-center text-xs text-slate-500">This is a UI-only share-page prototype. It does not imply independent project verification.</p>
      </div>
    </main>
  );
}
