import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executives | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Meet the student executive team leading the School of Mathematical and Computational Sciences Society at UPEI.",
};

const executives = [
  { number: "01", role: "Executive member", name: "Name coming soon", program: "Program information coming soon", initials: "SM" },
  { number: "02", role: "Executive member", name: "Name coming soon", program: "Program information coming soon", initials: "SM" },
  { number: "03", role: "Executive member", name: "Name coming soon", program: "Program information coming soon", initials: "SM" },
];

export default function ExecutivesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080b10] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Meet the team</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            The people behind
            <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">the community.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Get to know the student executives who help organize and support the School of Mathematical and Computational Sciences Society at UPEI.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Our executives</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#161616] md:text-4xl">Meet your student representatives.</h2>
            <p className="mt-5 leading-relaxed text-zinc-600">This page introduces the SMCSS executive team, with their official roles, names, and optional profile information.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executives.map((executive) => (
              <article key={executive.number} className="overflow-hidden rounded-3xl border border-[#161616]/10 bg-white/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#080b10]" aria-hidden="true">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan-300/12 blur-2xl" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-black text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.2)]">{executive.initials}</div>
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">{executive.number}</span>
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">{executive.role}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#161616]">{executive.name}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{executive.program}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-zinc-600">Executive profiles will be updated with verified information and only with each person&apos;s consent to share their details or photo.</p>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-cyan-300/20 bg-[#080b10] p-8 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] md:flex-row md:items-center md:p-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Get in touch</p>
            <h2 className="text-2xl font-bold md:text-3xl">Want to connect with SMCSS?</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-slate-300">Reach out to the society with questions or inquiries.</p>
          </div>
          <a href="mailto:smcss@upeisu.ca" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#cf9946] px-6 py-3 font-semibold text-[#080b10] transition hover:bg-[#e0b466]">Email SMCSS <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
