import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Learn about SMCSS, a ratified UPEI Student Union club supporting mathematics and computational sciences students.",
};

const objectives = [
  "Provide an environment of mutual support so students in the School of Mathematical and Computational Sciences can get to know each other better.",
  "Provide community outreach through activities that engage other UPEI students and upper-level secondary school students, making Mathematics and Computer Science better known.",
  "Promote friendship and respectful collegiality with School staff and faculty, as well as related departments or faculties with whom joint events may be scheduled.",
  "Provide an experience consistent with departmentally oriented student societies at universities and colleges worldwide.",
];

const exploreLinks = [
  { href: "/events", icon: "↗", title: "Events", description: "Discover society events, activities, and updates.", label: "Explore events" },
  { href: "/executives", icon: "◎", title: "Executives", description: "Learn about the students serving as society executives.", label: "Meet the team" },
  { href: "/resources", icon: "⌘", title: "Resources", description: "Find useful academic and computer science resources.", label: "Browse resources" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080b10] px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">About SMCSS</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            More than a society.
            <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">Your community.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            The School of Mathematical and Computational Sciences Society (SMCSS) is a student club ratified under the University of Prince Edward Island&apos;s Student Union.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Our objectives</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#161616] md:text-4xl">Building connection, curiosity, and community.</h2>
            <p className="mt-5 leading-relaxed text-zinc-600">Our work is guided by a shared commitment to support students and make mathematics and computer science more visible across our campus and community.</p>
          </div>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <li key={objective} className="rounded-3xl border border-[#161616]/10 bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#080b10] text-sm font-bold text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.16)]">
                  0{index + 1}
                </span>
                <p className="mt-5 leading-relaxed text-zinc-700">{objective}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-zinc-600">This website is a central place to find society information, explore events, meet the executives, and access student resources.</p>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Explore SMCSS</p>
            <h2 className="bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">Find your place in the community.</h2>
            <p className="mt-5 leading-relaxed text-zinc-600">Explore the different areas of the website to find society information and ways to stay connected.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-3xl border border-[#161616]/10 bg-[#F7F1E5] p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]">
                <span className="text-3xl text-cyan-700" aria-hidden="true">{link.icon}</span>
                <h3 className="mt-5 text-xl font-bold text-[#161616]">{link.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{link.description}</p>
                <span className="mt-6 inline-block font-semibold text-cyan-800 group-hover:underline">
                  {link.label} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080b10] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Stay connected</p>
            <h2 className="text-3xl font-bold md:text-4xl">Want to connect with SMCSS?</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-300">Reach out by email or follow the society on Instagram for updates.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:smcss@upeisu.ca" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-[#080b10] shadow-[0_0_16px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200">Email SMCSS</a>
            <a href="https://www.instagram.com/upeismcss" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-[#cf9946] hover:bg-white/10">Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
