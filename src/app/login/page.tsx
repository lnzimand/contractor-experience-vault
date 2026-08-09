import Link from "next/link";

export const metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-7 shadow-2xl">
        <div className="mb-8">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-sm font-black text-white">CV</div>
          <h1 className="mt-5 text-2xl font-bold text-slate-950">Sign in to your vault</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">Pilot UI only. Authentication will be connected to Supabase in the next implementation phase.</p>
        </div>
        <form className="space-y-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Email address
            <input type="email" placeholder="you@company.co.za" className="min-h-11 rounded-xl border border-slate-300 px-3 font-normal outline-none focus:ring-4 focus:ring-slate-100" />
          </label>
          <button type="button" className="min-h-11 w-full rounded-xl bg-slate-900 px-4 text-sm font-bold text-white shadow-sm">Send sign-in link</button>
        </form>
        <Link href="/dashboard" className="mt-5 block text-center text-sm font-semibold text-slate-600 hover:text-slate-950">Open demo workspace →</Link>
      </div>
    </main>
  );
}
