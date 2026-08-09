import Link from "next/link";
import { StatusPill } from "@/components/ui/status-pill";
import { formatCurrency, formatDate } from "@/lib/format";
import { getProjectCompleteness } from "@/lib/evidence";
import type { Project } from "@/lib/types";

export function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <th className="px-5 py-3 font-bold">Project</th>
            <th className="px-5 py-3 font-bold">Value</th>
            <th className="px-5 py-3 font-bold">Completed</th>
            <th className="px-5 py-3 font-bold">Evidence</th>
            <th className="px-5 py-3 font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            const completeness = getProjectCompleteness(project);
            const completeCount = completeness.filter((item) => item.complete).length;
            return (
              <tr key={project.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70">
                <td className="px-5 py-4">
                  <Link href={`/projects/${project.id}`} className="font-bold text-slate-950 hover:underline">
                    {project.title}
                  </Link>
                  <p className="mt-1 text-xs text-slate-500">{project.clientName} · {project.location}</p>
                </td>
                <td className="px-5 py-4 font-semibold text-slate-800">{formatCurrency(project.contractValue)}</td>
                <td className="px-5 py-4 text-slate-600">{formatDate(project.completionDate)}</td>
                <td className="px-5 py-4">
                  <span className={`font-bold ${completeCount === 5 ? "text-emerald-700" : "text-amber-700"}`}>{completeCount}/5</span>
                </td>
                <td className="px-5 py-4"><StatusPill status={project.status} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
