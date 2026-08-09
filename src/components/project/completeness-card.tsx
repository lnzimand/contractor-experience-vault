import { Card } from "@/components/ui/card";
import { getProjectCompleteness } from "@/lib/evidence";
import type { Project } from "@/lib/types";

export function CompletenessCard({ project }: { project: Project }) {
  const items = getProjectCompleteness(project);
  const completed = items.filter((item) => item.complete).length;
  const percentage = Math.round((completed / items.length) * 100);

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-950">Evidence completeness</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Measures whether useful proof is present. It is not a verification score.</p>
        </div>
        <span className="text-lg font-black text-slate-950">{completed}/{items.length}</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-slate-900" style={{ width: `${percentage}%` }} />
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
            <span className="text-slate-700">{item.label}</span>
            <span className={`font-bold ${item.complete ? "text-emerald-700" : "text-amber-700"}`}>
              {item.complete ? "Available" : "Missing"}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
