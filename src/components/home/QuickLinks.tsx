import Link from "next/link";

const quickLinks = [
  {
    number: "01",
    title: "Discover SMCSS",
    description: "Learn about our society, our mission, and the community we're building.",
    link: "/about",
    label: "About us",
    icon: "✳",
  },
  {
    number: "02",
    title: "What's happening",
    description: "Find society events, activities, and opportunities to get involved.",
    link: "/events",
    label: "Explore events",
    icon: "↗",
  },
  {
    number: "03",
    title: "Meet the team",
    description: "Get to know the executives helping lead and support our society.",
    link: "/executives",
    label: "Meet executives",
    icon: "◎",
  },
  {
    number: "04",
    title: "Student resources",
    description: "Explore helpful academic resources and information for students.",
    link: "/resources",
    label: "View resources",
    icon: "⌘",
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-[#F7F1E5] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Your campus, your community
            </p>
            <h2 className="max-w-2xl bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
              Everything you need, all in one place.
            </h2>
          </div>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.number}
              href={item.link}
              className="group flex min-h-[280px] flex-col rounded-3xl border border-[#161616]/10 bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-500">{item.number}</span>
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#161616] text-2xl text-cyan-200 transition group-hover:rotate-6 group-hover:bg-cyan-300 group-hover:text-[#161616] group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]"
                >
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#161616]">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800">
                {item.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
