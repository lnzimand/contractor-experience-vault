import type { EvidenceType, Project } from "@/lib/types";

export const evidenceLabels: Record<EvidenceType, string> = {
  appointment_letter: "Appointment Letter",
  contract: "Contract",
  purchase_order: "Purchase Order",
  completion_certificate: "Completion Certificate",
  reference_letter: "Reference Letter",
  invoice: "Invoice",
  before_photo: "Before Photo",
  progress_photo: "Progress Photo",
  after_photo: "After Photo",
  other: "Other",
};

export type CompletenessItem = {
  label: string;
  complete: boolean;
};

export function getProjectCompleteness(project: Project): CompletenessItem[] {
  const types = new Set(project.evidence.map((item) => item.type));
  const hasAppointmentEvidence =
    types.has("appointment_letter") || types.has("contract") || types.has("purchase_order");
  const hasCompletionEvidence = types.has("completion_certificate");
  const hasPhotos =
    types.has("before_photo") || types.has("progress_photo") || types.has("after_photo");

  return [
    { label: "Project information", complete: Boolean(project.title && project.clientName && project.scope) },
    { label: "Appointment evidence", complete: hasAppointmentEvidence },
    { label: "Completion evidence", complete: hasCompletionEvidence },
    { label: "Reference", complete: project.references.length > 0 },
    { label: "Project photographs", complete: hasPhotos },
  ];
}
