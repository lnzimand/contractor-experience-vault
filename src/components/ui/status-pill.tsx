import type { ProjectStatus } from "@/lib/types";

const styles: Record<ProjectStatus, string> = {
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  draft: "bg-amber-50 text-amber-700 ring-amber-600/20",
  archived: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${styles[status]}`}>
      {status}
    </span>
  );
}
