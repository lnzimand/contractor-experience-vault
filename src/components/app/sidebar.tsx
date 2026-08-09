"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard", mark: "D" },
  { href: "/projects", label: "Projects", mark: "P" },
  { href: "/experience", label: "Experience", mark: "E" },
  { href: "/documents", label: "Documents", mark: "F" },
  { href: "/company", label: "Company", mark: "C" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-slate-950 text-slate-200 lg:flex lg:flex-col">
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-slate-950">CV</div>
          <div>
            <p className="font-bold text-white">Contractor Vault</p>
            <p className="text-xs text-slate-400">Pilot workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                active ? "bg-white text-slate-950 shadow-sm" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className={`grid h-7 w-7 place-items-center rounded-lg text-xs ${active ? "bg-slate-100" : "bg-white/10"}`}>
                {link.mark}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="text-xs text-slate-400">Demo organization</p>
        <p className="mt-1 truncate text-sm font-semibold text-white">Khanya Electrical & Projects</p>
      </div>
    </aside>
  );
}
