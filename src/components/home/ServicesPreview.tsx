import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="bg-[#F7F1E5] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            Student support
          </p>

          <h2 className="bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
            Made for your campus life.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Explore services offered by SMCSS to help make your university experience more
            convenient.
          </p>
        </div>

        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#080b10] text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] md:grid-cols-2">
          <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#cf9946] text-3xl text-[#161616] shadow-[0_0_16px_rgba(207,153,70,0.28)]">
                <span aria-hidden="true">▣</span>
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                SMCSS locker rentals
              </p>

              <h3 className="text-3xl font-bold md:text-4xl">A little more room for your day.</h3>

              <p className="mt-5 leading-relaxed text-slate-300">
                Keep your belongings in a rented locker on the bottom floor of Cass Science
                Hall.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-[#080b10] shadow-[0_0_16px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.4)]"
              >
                View rental details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white/95 p-8 text-[#161616] md:p-12">
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Rental overview</p>
              <p className="mt-2 text-5xl font-black tracking-tight">$10</p>
              <p className="mt-1 text-sm font-medium text-zinc-600">Per semester</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 border-t border-zinc-200 pt-4">
                <span className="font-bold text-cyan-700" aria-hidden="true">✓</span>
                <div>
                  <p className="font-semibold">One-semester rental</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">Locker rentals are for one semester.</p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-zinc-200 pt-4">
                <span className="font-bold text-cyan-700" aria-hidden="true">✓</span>
                <div>
                  <p className="font-semibold">$10 refundable deposit</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    The deposit is refundable when the rental rules are followed.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-zinc-200 pt-4">
                <span className="font-bold text-cyan-700" aria-hidden="true">✓</span>
                <div>
                  <p className="font-semibold">Convenient campus location</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">Bottom floor of Cass Science Hall.</p>
                </div>
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-[#F7F1E5] p-4 text-sm leading-relaxed text-zinc-600">
              To rent a locker, email{" "}
              <a href="mailto:smcss@upeisu.ca" className="font-semibold text-cyan-800 underline underline-offset-2">
                smcss@upeisu.ca
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
