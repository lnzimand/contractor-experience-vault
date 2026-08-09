import type { GeneratedDocument, Project } from "@/lib/types";

export const organization = {
  name: "Khanya Electrical & Projects",
  registrationNumber: "2022/123456/07",
  description:
    "Electrical, backup-power and low-voltage installation contractor serving commercial and industrial clients across Gauteng.",
  email: "projects@khanya-demo.co.za",
  phone: "+27 11 555 0148",
  website: "www.khanya-demo.co.za",
  address: "Johannesburg, Gauteng",
};

export const projects: Project[] = [
  {
    id: "abc-manufacturing",
    title: "Electrical Distribution Upgrade",
    clientName: "ABC Manufacturing",
    location: "Midrand, Gauteng",
    contractValue: 840000,
    currency: "ZAR",
    startDate: "2025-01-13",
    completionDate: "2025-03-21",
    status: "completed",
    description:
      "Upgrade of the manufacturing facility's electrical distribution infrastructure to support increased production capacity.",
    scope:
      "Replacement of distribution boards, new cabling, protection upgrades, testing, commissioning and final handover documentation.",
    evidence: [
      { id: "e1", type: "appointment_letter", fileName: "appointment-letter.pdf", sizeLabel: "842 KB" },
      { id: "e2", type: "purchase_order", fileName: "purchase-order-1042.pdf", sizeLabel: "316 KB" },
      { id: "e3", type: "completion_certificate", fileName: "completion-certificate.pdf", sizeLabel: "1.1 MB" },
      { id: "e4", type: "progress_photo", fileName: "db-installation.jpg", sizeLabel: "2.4 MB" },
      { id: "e5", type: "after_photo", fileName: "completed-distribution-room.jpg", sizeLabel: "3.1 MB" },
    ],
    references: [
      {
        id: "r1",
        name: "Naledi Molefe",
        position: "Facilities Manager",
        company: "ABC Manufacturing",
        email: "naledi@example.invalid",
        phone: "+27 00 000 0001",
      },
    ],
  },
  {
    id: "rosebank-backup",
    title: "Backup Power Installation",
    clientName: "Rosebank Office Park",
    location: "Rosebank, Gauteng",
    contractValue: 1250000,
    currency: "ZAR",
    startDate: "2024-07-08",
    completionDate: "2024-10-18",
    status: "completed",
    description: "Turnkey backup-power installation for a multi-tenant commercial office property.",
    scope: "Generator integration, automatic changeover, distribution modifications, testing and commissioning.",
    evidence: [
      { id: "e6", type: "contract", fileName: "signed-contract.pdf", sizeLabel: "2.8 MB" },
      { id: "e7", type: "completion_certificate", fileName: "handover-certificate.pdf", sizeLabel: "1.0 MB" },
      { id: "e8", type: "reference_letter", fileName: "client-reference.pdf", sizeLabel: "554 KB" },
      { id: "e9", type: "after_photo", fileName: "generator-room.jpg", sizeLabel: "3.4 MB" },
    ],
    references: [
      {
        id: "r2",
        name: "Sibusiso Ndlovu",
        position: "Property Operations Manager",
        company: "Rosebank Office Park",
        email: "sibusiso@example.invalid",
      },
    ],
  },
  {
    id: "warehouse-led",
    title: "Warehouse LED Retrofit",
    clientName: "Midrand Logistics",
    location: "Midrand, Gauteng",
    contractValue: 430000,
    currency: "ZAR",
    startDate: "2025-05-05",
    completionDate: "2025-06-06",
    status: "completed",
    description: "Lighting-efficiency upgrade across warehouse and loading areas.",
    scope: "Removal of legacy fittings, LED installation, circuit testing and final handover.",
    evidence: [
      { id: "e10", type: "purchase_order", fileName: "po-77831.pdf", sizeLabel: "240 KB" },
      { id: "e11", type: "invoice", fileName: "final-invoice.pdf", sizeLabel: "320 KB" },
      { id: "e12", type: "after_photo", fileName: "warehouse-lighting.jpg", sizeLabel: "2.9 MB" },
    ],
    references: [],
  },
  {
    id: "germiston-security",
    title: "CCTV & Access Control Installation",
    clientName: "Germiston Retail Centre",
    location: "Germiston, Gauteng",
    contractValue: 680000,
    currency: "ZAR",
    startDate: "2024-02-12",
    completionDate: "2024-04-26",
    status: "completed",
    description: "Security-system expansion across retail, loading and administration zones.",
    scope: "CCTV cameras, network video recording, access readers, cabling, configuration and commissioning.",
    evidence: [
      { id: "e13", type: "appointment_letter", fileName: "appointment.pdf", sizeLabel: "620 KB" },
      { id: "e14", type: "completion_certificate", fileName: "completion.pdf", sizeLabel: "882 KB" },
      { id: "e15", type: "before_photo", fileName: "before.jpg", sizeLabel: "2.2 MB" },
      { id: "e16", type: "after_photo", fileName: "after.jpg", sizeLabel: "2.5 MB" },
    ],
    references: [],
  },
  {
    id: "centurion-generator",
    title: "Generator Installation",
    clientName: "Centurion Industrial Park",
    location: "Centurion, Gauteng",
    contractValue: 920000,
    currency: "ZAR",
    startDate: "2023-08-14",
    completionDate: "2023-11-10",
    status: "completed",
    description: "Standby generation and automatic changeover installation for critical industrial loads.",
    scope: "Generator placement, fuel integration, cabling, ATS integration, testing and commissioning.",
    evidence: [
      { id: "e17", type: "contract", fileName: "contract.pdf", sizeLabel: "1.8 MB" },
      { id: "e18", type: "purchase_order", fileName: "po.pdf", sizeLabel: "410 KB" },
      { id: "e19", type: "completion_certificate", fileName: "completion.pdf", sizeLabel: "920 KB" },
      { id: "e20", type: "reference_letter", fileName: "reference.pdf", sizeLabel: "488 KB" },
      { id: "e21", type: "after_photo", fileName: "generator.jpg", sizeLabel: "2.7 MB" },
    ],
    references: [
      {
        id: "r3",
        name: "Kabelo Nkosi",
        position: "Technical Manager",
        company: "Centurion Industrial Park",
        phone: "+27 00 000 0002",
      },
    ],
  },
  {
    id: "soweto-solar",
    title: "Solar Backup System",
    clientName: "Soweto Community Centre",
    location: "Soweto, Gauteng",
    contractValue: 360000,
    currency: "ZAR",
    startDate: "2025-02-03",
    completionDate: "2025-02-28",
    status: "draft",
    description: "Solar and battery backup supporting lighting, security and essential office loads.",
    scope: "PV installation, inverter, battery bank, distribution integration and commissioning.",
    evidence: [
      { id: "e22", type: "appointment_letter", fileName: "appointment.pdf", sizeLabel: "440 KB" },
      { id: "e23", type: "progress_photo", fileName: "roof-array.jpg", sizeLabel: "3.0 MB" },
    ],
    references: [],
  },
];

export const generatedDocuments: GeneratedDocument[] = [
  {
    id: "doc-1",
    name: "Company Experience Portfolio - July 2026",
    type: "experience_portfolio",
    generatedAt: "2026-07-22",
    projectCount: 5,
  },
  {
    id: "doc-2",
    name: "ABC Manufacturing - Project Profile",
    type: "project_profile",
    generatedAt: "2026-07-18",
    projectCount: 1,
  },
  {
    id: "doc-3",
    name: "Rosebank Office Park - Project Profile",
    type: "project_profile",
    generatedAt: "2026-07-10",
    projectCount: 1,
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
