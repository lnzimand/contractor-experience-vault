export type ProjectStatus = "draft" | "completed" | "archived";

export type EvidenceType =
  | "appointment_letter"
  | "contract"
  | "purchase_order"
  | "completion_certificate"
  | "reference_letter"
  | "invoice"
  | "before_photo"
  | "progress_photo"
  | "after_photo"
  | "other";

export type Evidence = {
  id: string;
  type: EvidenceType;
  fileName: string;
  sizeLabel: string;
};

export type ProjectReference = {
  id: string;
  name: string;
  position?: string;
  company?: string;
  email?: string;
  phone?: string;
};

export type Project = {
  id: string;
  title: string;
  clientName: string;
  location: string;
  contractValue?: number;
  currency: "ZAR";
  startDate?: string;
  completionDate?: string;
  status: ProjectStatus;
  description: string;
  scope: string;
  evidence: Evidence[];
  references: ProjectReference[];
};

export type GeneratedDocument = {
  id: string;
  name: string;
  type: "project_profile" | "experience_portfolio";
  generatedAt: string;
  projectCount: number;
};
