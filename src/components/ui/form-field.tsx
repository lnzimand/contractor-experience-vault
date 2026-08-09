type FormFieldProps = {
  label: string;
  name: string;
  defaultValue?: string | number;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "date";
  required?: boolean;
};

export function FormField({ label, name, defaultValue, placeholder, type = "text", required }: FormFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      <span>
        {label} {required ? <span className="text-rose-600">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
      />
    </label>
  );
}

export function TextAreaField({ label, name, defaultValue, placeholder, required }: Omit<FormFieldProps, "type">) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      <span>
        {label} {required ? <span className="text-rose-600">*</span> : null}
      </span>
      <textarea
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-normal leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
      />
    </label>
  );
}
