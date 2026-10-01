import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Explore UPEI student resources, math computation tools, computer science guides, and research links.",
};

const resourceGroups = [
  {
    number: "01",
    title: "UPEI resources",
    description: "Official university information for current students, academic planning, and student support.",
    icon: "⌖",
    links: [
      { label: "UPEI Current Students", href: "https://www.upei.ca/current-students" },
      { label: "School of Mathematical & Computational Sciences", href: "https://www.upei.ca/programs/mathematical-and-computational-sciences" },
      { label: "Registrar's Office", href: "https://www.upei.ca/office-registrar" },
      { label: "Student Affairs", href: "https://www.upei.ca/current-students/student-affairs" },
    ],
  },
  {
    number: "02",
    title: "Math resources",
    description: "Calculators, graphing tools, and step-by-step support for working through mathematical ideas.",
    icon: "π",
    links: [
      { label: "Wolfram|Alpha", href: "https://www.wolframalpha.com/" },
      { label: "Desmos Graphing Calculator", href: "https://www.desmos.com/calculator" },
      { label: "Symbolab", href: "https://www.symbolab.com/" },
      { label: "Mathway", href: "https://www.mathway.com/" },
    ],
  },
  {
    number: "03",
    title: "Computer science",
    description: "Community knowledge, version-control tools, and guided learning platforms for CS students.",
    icon: "</>",
    links: [
      { label: "Stack Overflow", href: "https://stackoverflow.com/" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "Codecademy", href: "https://www.codecademy.com/" },
    ],
  },
  {
    number: "04",
    title: "Research & writing",
    description: "Useful tools for preparing technical documents and keeping research sources organized.",
    icon: "▤",
    links: [
      { label: "Overleaf", href: "https://www.overleaf.com/" },
      { label: "Mendeley", href: "https://www.mendeley.com/" },
      { label: "Zotero", href: "https://www.zotero.org/" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080b10] px-6 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Your student toolkit</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Resources to help you
            <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">move forward.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Explore UPEI supports, math and computer science learning tools, and research resources selected from the current SMCSS resource list.</p>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-cyan-700">Explore</p>
            <h2 className="text-3xl font-extrabold text-[#161616] sm:text-4xl">Find what you need.</h2>
            <p className="mt-4 leading-8 text-zinc-600">Choose a category, then use the rounded resource links to open the relevant site in a new tab.</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {resourceGroups.map((group) => (
              <article key={group.number} className="group rounded-3xl border border-[#161616]/10 bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)] sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#161616] text-2xl font-bold text-cyan-200 transition group-hover:rotate-3 group-hover:bg-cyan-300 group-hover:text-[#161616] group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]" aria-hidden="true">{group.icon}</div>
                  <span className="text-sm font-bold tracking-widest text-zinc-500">{group.number}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#161616]">{group.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-cyan-600/45 bg-white px-3.5 py-2 text-xs font-semibold text-cyan-900 transition hover:border-cyan-400 hover:bg-cyan-50 hover:shadow-[0_0_12px_rgba(34,211,238,0.18)]">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-3xl border border-cyan-300/20 bg-[#080b10] p-8 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] sm:p-12 md:grid-cols-[1fr_auto]">
          <div><p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-200">Stay connected</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Get involved with SMCSS.</h2><p className="mt-4 max-w-xl leading-8 text-slate-300">Keep up with society activities and find opportunities to participate in the student community.</p></div>
          <a href="https://linktr.ee/upeismcss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#cf9946] px-7 py-4 text-center font-bold text-[#080b10] transition hover:bg-[#e0b466]">Explore SMCSS links <span className="ml-2" aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16 text-center sm:py-20"><div className="mx-auto max-w-2xl"><h2 className="text-3xl font-extrabold text-[#161616] sm:text-4xl">Looking for something specific?</h2><p className="mt-4 leading-8 text-zinc-600">Contact SMCSS with questions or suggestions for resources to include on this page.</p><a href="mailto:smcss@upeisu.ca?subject=Resource%20Suggestion" className="mt-7 inline-flex items-center justify-center rounded-full border border-cyan-500/60 px-8 py-4 font-bold text-cyan-800 transition hover:bg-cyan-50">Suggest a resource <span className="ml-2" aria-hidden="true">→</span></a></div></section>
    </div>
  );
}
