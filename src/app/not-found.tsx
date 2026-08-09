import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">404</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950">Project not found</h1>
        <p className="mt-2 text-sm text-slate-600">The requested demo resource does not exist.</p>
        <Link href="/projects" className="mt-5 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">Back to projects</Link>
      </div>
    </main>
  );
}
