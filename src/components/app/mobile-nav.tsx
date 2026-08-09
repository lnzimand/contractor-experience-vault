import Link from "next/link";

const links = [
  ["/dashboard", "Dashboard"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/documents", "Documents"],
  ["/company", "Company"],
];

export function MobileNav() {
  return (
    <div className="overflow-x-auto border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
      <div className="flex min-w-max gap-2">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
