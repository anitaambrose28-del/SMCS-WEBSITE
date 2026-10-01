import Link from "next/link";

const eventFeatures = [
  {
    number: "01",
    title: "Community events",
    description:
      "Connect with fellow computer science students and take part in society activities.",
  },
  {
    number: "02",
    title: "Workshops & learning",
    description: "Discover opportunities to learn, share ideas, and develop new skills.",
  },
  {
    number: "03",
    title: "Get involved",
    description: "Stay connected with SMCSS and find ways to participate in the community.",
  },
];

export default function EventsPreview() {
  return (
    <section className="bg-white/60 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Stay in the loop
          </p>

          <h2 className="max-w-xl bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            Something is always happening.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            From community gatherings to learning opportunities, stay connected with
            what&apos;s happening through SMCSS.
          </p>

          <a
            href="https://linktr.ee/upeismcss"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#161616] px-7 py-4 font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.16)] transition hover:bg-[#292929] hover:shadow-[0_0_25px_rgba(34,211,238,0.28)]"
          >
            Explore SMCSS updates <span aria-hidden="true">↗</span>
          </a>

          <p className="mt-3 text-sm text-zinc-600">Opens the official SMCSS Linktree in a new tab.</p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#080b10] p-8 text-white shadow-[0_18px_42px_rgba(8,11,16,0.2)] md:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/15 blur-2xl" />
          <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#cf9946]/10 blur-2xl" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                SMCSS community
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
                Get connected
              </span>
            </div>

            <div className="space-y-6">
              {eventFeatures.map((event) => (
                <div
                  key={event.number}
                  className="flex gap-5 border-b border-white/15 pb-6 last:border-0 last:pb-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-sm font-bold text-[#080b10] shadow-[0_0_14px_rgba(34,211,238,0.25)]">
                    {event.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Want to see current event information?</p>
              <Link
                href="/events"
                className="mt-2 inline-flex items-center gap-2 font-semibold text-cyan-200 hover:underline"
              >
                Visit the events page <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
