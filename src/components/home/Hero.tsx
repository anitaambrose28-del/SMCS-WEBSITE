import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F1E5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(34,211,238,0.12),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-500/35 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800">
            UPEI School of Mathematical and Computational Sciences
          </p>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#161616] md:text-7xl">
            More than a society.
            <span className="block bg-gradient-to-r from-[#cf9946] to-cyan-500 bg-clip-text text-transparent">
              Your community.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            Connect with fellow computer science students, discover opportunities, and make
            your university experience count.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="rounded-full bg-[#111111] px-7 py-3.5 font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.18)] transition hover:bg-[#272727] hover:shadow-[0_0_26px_rgba(34,211,238,0.3)]"
            >
              Explore events
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-cyan-500/50 px-7 py-3.5 font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Get to know us
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[450px]" aria-hidden="true">
          <div className="absolute h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl md:h-96 md:w-96" />
          <div className="group relative flex h-64 w-64 rotate-3 items-center justify-center rounded-[2rem] border border-cyan-300/40 bg-[#0b0d11] p-7 shadow-[0_18px_40px_rgba(8,11,16,0.22)] transition duration-500 hover:rotate-0 hover:scale-105 hover:shadow-[0_24px_55px_rgba(34,211,238,0.25)] md:h-80 md:w-80">
            <div className="absolute -right-5 -top-5 h-16 w-16 rounded-2xl bg-[#cf9946] shadow-[0_0_18px_rgba(207,153,70,0.3)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-20 md:w-20" />
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full border-4 border-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.28)] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 md:h-24 md:w-24" />
            <div className="relative flex flex-col items-center">
              <Image
                src="/smcss-logo.png"
                alt="SMCSS logo"
                width={512}
                height={512}
                className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-40 sm:w-40 md:h-48 md:w-48"
                priority
              />
              <p className="mt-3 max-w-[13rem] text-center text-xs font-medium leading-relaxed text-cyan-200 md:text-sm">
                Where Math Meets Code and Friendships Compute!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
