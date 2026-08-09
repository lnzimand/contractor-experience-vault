import { FormField, TextAreaField } from "@/components/ui/form-field";
import type { Project } from "@/lib/types";

export function ProjectForm({ project }: { project?: Project }) {
  return (
    <form className="grid gap-6">
      <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:grid-cols-2">
        <div className="md:col-span-2">
          <h2 className="font-bold text-slate-950">Project details</h2>
          <p className="mt-1 text-sm text-slate-500">Capture the facts you would normally need in a company profile or experience schedule.</p>
        </div>
        <FormField label="Project title" name="title" defaultValue={project?.title} placeholder="Electrical Distribution Upgrade" required />
        <FormField label="Client name" name="clientName" defaultValue={project?.clientName} placeholder="ABC Manufacturing" required />
        <FormField label="Location" name="location" defaultValue={project?.location} placeholder="Midrand, Gauteng" />
        <FormField label="Contract value" name="contractValue" defaultValue={project?.contractValue} type="number" placeholder="840000" />
        <FormField label="Start date" name="startDate" defaultValue={project?.startDate} type="date" />
        <FormField label="Completion date" name="completionDate" defaultValue={project?.completionDate} type="date" />
        <div className="md:col-span-2">
          <TextAreaField label="Project description" name="description" defaultValue={project?.description} placeholder="Briefly explain the outcome of the project." required />
        </div>
        <div className="md:col-span-2">
          <TextAreaField label="Scope of work" name="scope" defaultValue={project?.scope} placeholder="Describe the work delivered, major systems installed and responsibilities." required />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button type="button" className="min-h-10 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800">Save draft</button>
        <button type="button" className="min-h-10 rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm">Save project</button>
      </div>
    </form>
  );
}
