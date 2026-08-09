import { Card } from "@/components/ui/card";
import { FormField, TextAreaField } from "@/components/ui/form-field";
import { PageHeader } from "@/components/ui/page-header";
import { organization } from "@/lib/mock-data";

export const metadata = { title: "Company" };

export default function CompanyPage() {
  return (
    <div className="space-y-7">
      <PageHeader title="Company profile" description="This information brands project profiles and experience portfolios." />
      <Card className="p-5 md:p-7">
        <form className="grid gap-5 md:grid-cols-2">
          <FormField label="Company name" name="name" defaultValue={organization.name} required />
          <FormField label="Registration number" name="registrationNumber" defaultValue={organization.registrationNumber} />
          <FormField label="Email" name="email" defaultValue={organization.email} type="email" />
          <FormField label="Phone" name="phone" defaultValue={organization.phone} type="tel" />
          <FormField label="Website" name="website" defaultValue={organization.website} />
          <FormField label="Address" name="address" defaultValue={organization.address} />
          <div className="md:col-span-2">
            <TextAreaField label="Company description" name="description" defaultValue={organization.description} />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="button" className="min-h-10 rounded-lg bg-slate-900 px-4 text-sm font-bold text-white shadow-sm">Save company</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
