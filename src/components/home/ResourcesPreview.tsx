import Link from "next/link";

const resources = [
  {
    number: "01",
    category: "Academic support",
    title: "Study resources",
    description: "Find helpful materials and resources to support your studies.",
    icon: "▤",
  },
  {
    number: "02",
    category: "Computer science",
    title: "CS learning tools",
    description: "Explore tools and references relevant to computer science learning.",
    icon: "</>",
  },
  {
    number: "03",
    category: "Student information",
    title: "Campus resources",
    description: "Discover useful information and links for your university experience.",
    icon: "⌖",
  },
];

export default function ResourcesPreview() {
  return (
    <section className="bg-white/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Learn and grow
            </p>

            <h2 className="bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
              Your next idea starts here.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Explore useful resources to support your learning, discover tools, and make
              the most of your time as a student.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/60 px-6 py-3 font-semibold text-cyan-800 transition hover:bg-cyan-50"
          >
            Browse resources <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.number}
              className="group rounded-3xl border border-[#161616]/10 bg-[#F7F1E5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-500">{resource.number}</span>
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#161616] text-xl font-bold text-cyan-200 transition group-hover:rotate-3 group-hover:bg-cyan-300 group-hover:text-[#161616] group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]"
                >
                  {resource.icon}
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">
                {resource.category}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#161616]">{resource.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{resource.description}</p>

              <Link
                href="/resources"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 hover:text-cyan-600"
              >
                Explore resources <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
