import { MobileNav } from "@/components/app/mobile-nav";
import { Sidebar } from "@/components/app/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Contractor Experience Vault</p>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-slate-900 text-xs font-bold text-white">KM</div>
        </header>
        <MobileNav />
        <main className="mx-auto w-full max-w-7xl p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
