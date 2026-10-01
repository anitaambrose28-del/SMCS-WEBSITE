export default function ContactPreview() {
  return (
    <section className="bg-[#F7F1E5] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#080b10] px-8 py-12 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] md:px-16 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#cf9946]/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Let&apos;s connect
              </p>

              <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
                Have a question?
                <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">
                  We&apos;re here to help.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
                Whether you want to learn more about SMCSS, ask about locker rentals, or get
                involved, reach out and connect with us.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:smcss@upeisu.ca"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-cyan-300 p-6 text-[#080b10] shadow-[0_0_18px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200 hover:shadow-[0_0_26px_rgba(34,211,238,0.4)]"
              >
                <div>
                  <p className="text-sm font-medium opacity-70">Send us an email</p>
                  <p className="mt-1 break-all text-lg font-bold">smcss@upeisu.ca</p>
                </div>
                <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">↗</span>
              </a>

              <a
                href="https://www.instagram.com/upeismcss"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 p-6 transition hover:border-[#cf9946] hover:bg-white/10"
              >
                <div>
                  <p className="text-sm font-medium text-slate-300">Follow us on Instagram</p>
                  <p className="mt-1 text-lg font-bold">@upeismcss</p>
                </div>
                <span aria-hidden="true" className="text-2xl text-[#cf9946] transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
