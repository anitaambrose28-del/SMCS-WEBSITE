import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Discover upcoming events, workshops, student gatherings, and official updates from SMCSS at UPEI.",
};

const eventTypes = [
  { number: "01", title: "Community & connection", description: "Find opportunities to connect with fellow students and take part in the SMCSS community.", icon: "✳" },
  { number: "02", title: "Learning & discovery", description: "Explore opportunities to share knowledge, discover ideas, and grow your interests in computer science.", icon: "⌘" },
  { number: "03", title: "Get involved", description: "Stay informed about society activities and discover ways to participate.", icon: "↗" },
];

export default function EventsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080b10] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">SMCSS events</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Connect, discover,
            <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">and get involved.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Stay connected with the SMCSS community and find society updates, activities, and opportunities to participate.
          </p>
          <a href="https://linktr.ee/upeismcss" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-semibold text-[#080b10] shadow-[0_0_18px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200 hover:shadow-[0_0_26px_rgba(34,211,238,0.4)]">
            View official SMCSS updates <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Explore opportunities</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#161616] md:text-4xl">Find ways to be part of the community.</h2>
            <p className="mt-5 leading-relaxed text-zinc-600">Whether you&apos;re looking to connect with others, explore computer science, or participate in society activities, stay tuned to official updates.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {eventTypes.map((event) => (
              <article key={event.number} className="group rounded-3xl border border-[#161616]/10 bg-white/70 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-500">{event.number}</span>
                  <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#161616] text-2xl text-cyan-200 transition group-hover:rotate-6 group-hover:bg-cyan-300 group-hover:text-[#161616] group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]">{event.icon}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#161616]">{event.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-600">{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#080b10] p-8 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] md:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-300/12 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Official event information</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold md:text-4xl">Don&apos;t miss what&apos;s happening.</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-300">Visit the official SMCSS Linktree for current society links and updates. Check there for event announcements and details.</p>
              <a href="https://linktr.ee/upeismcss" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#cf9946] px-7 py-4 font-semibold text-[#080b10] transition hover:bg-[#e0b466]">Visit SMCSS Linktree <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl border border-[#161616]/10 bg-white/70 p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#161616]">Have a question about SMCSS?</h2>
            <p className="mt-2 text-zinc-600">Contact the society for more information.</p>
          </div>
          <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#161616] px-6 py-3 font-semibold text-white transition hover:bg-[#292929]">Contact us <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  );
}
