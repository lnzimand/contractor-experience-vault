"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import type { Project } from "@/lib/types";

export function PortfolioBuilder({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<string[]>(projects.slice(0, 3).map((project) => project.id));
  const totalValue = useMemo(
    () => projects.filter((project) => selected.includes(project.id)).reduce((sum, project) => sum + (project.contractValue ?? 0), 0),
    [projects, selected],
  );

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_360px]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 px-5 py-4"><h2 className="font-bold text-slate-950">Choose projects</h2><p className="mt-1 text-xs text-slate-500">Ordering controls will be added when persistence is wired.</p></div>
        <div className="divide-y divide-slate-100">
          {projects.filter((project) => project.status !== "archived").map((project) => (
            <label key={project.id} className="flex cursor-pointer items-start gap-4 px-5 py-4 hover:bg-slate-50">
              <input type="checkbox" checked={selected.includes(project.id)} onChange={() => toggle(project.id)} className="mt-1 h-4 w-4" />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-slate-950">{project.title}</p>
                <p className="mt-1 text-xs text-slate-500">{project.clientName} · {formatCurrency(project.contractValue)}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-bold text-slate-950">Portfolio summary</p>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4"><dt className="text-slate-500">Selected projects</dt><dd className="font-bold">{selected.length}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-slate-500">Recorded value</dt><dd className="font-bold">{formatCurrency(totalValue)}</dd></div>
        </dl>
        <button type="button" disabled={!selected.length} className="mt-5 min-h-11 w-full rounded-xl bg-slate-900 px-4 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Generate portfolio</button>
        <p className="mt-3 text-xs leading-5 text-slate-500">PDF generation is intentionally a UI placeholder until the snapshot/storage workflow is implemented.</p>
      </aside>
    </div>
  );
}
