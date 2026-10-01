import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Get in touch with SMCSS at UPEI, located in Cass Science Hall Lounge (202).",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F7F1E5] text-[#161616]">
      <section className="bg-[#080b10] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            Get in touch
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question, suggestion, or want to connect with SMCSS?
            Reach out through our contact channels.
          </p>
        </div>
      </section>

      <section className="bg-[#070d0d] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 text-center">
          <svg className="h-6 w-6 shrink-0 text-[#cf9946]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <p className="text-base font-bold sm:text-lg">
            <span className="text-[#cf9946]">Located in</span>{" "}
            <span className="bg-gradient-to-r from-white via-stone-300 to-cyan-300 bg-clip-text text-transparent">Cass Science Hall Lounge (202)</span>
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-cyan-700">
              Connect with us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#161616] sm:text-4xl">
              Choose how to reach us
            </h2>
            <p className="mt-4 leading-8 text-zinc-600">
              Whether you have a question or want to stay updated, we&apos;re
              just a message away.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#161616]/10 bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_16px_30px_rgba(34,211,238,0.13)] sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl" aria-hidden="true">
                <span>✉️</span>
              </div>
              <h3 className="mt-7 text-2xl font-bold text-[#161616]">
                Send us an email
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Have a question about the society, locker rentals, or
                student activities? Send us an email.
              </p>
              <a
                href="mailto:smcss@upeisu.ca"
                className="mt-6 inline-block break-all font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-950"
              >
                smcss@upeisu.ca
              </a>
              <a
                href="mailto:smcss@upeisu.ca"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-4 font-bold text-[#080b10] shadow-[0_0_16px_rgba(34,211,238,0.18)] transition hover:bg-cyan-200"
              >
                Email SMCSS
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </article>

            <article className="rounded-3xl border border-[#161616]/10 bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cf9946]/60 hover:shadow-[0_16px_30px_rgba(207,153,70,0.13)] sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#cf9946]/15 text-3xl" aria-hidden="true">
                <span>📸</span>
              </div>
              <h3 className="mt-7 text-2xl font-bold text-[#161616]">
                Follow us on Instagram
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">
                Connect with SMCSS on Instagram and keep up with society
                updates, activities, and announcements.
              </p>
              <a
                href="https://www.instagram.com/upeismcss"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-950"
              >
                @upeismcss
              </a>
              <a
                href="https://www.instagram.com/upeismcss"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-[#080b10] px-6 py-4 font-bold text-[#080b10] transition hover:border-[#080b10] hover:bg-[#080b10] hover:text-white"
              >
                Visit Instagram
                <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#080b10] px-7 py-12 text-center text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#cf9946] text-2xl text-[#080b10]" aria-hidden="true">
            <span>✨</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Your community starts here.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-300">
            SMCSS is here to help you stay connected with the student
            community. We welcome your questions, ideas, and suggestions.
          </p>
          <a
            href="mailto:smcss@upeisu.ca?subject=Hello%20SMCSS"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#cf9946] px-8 py-4 font-bold text-[#080b10] transition hover:bg-[#e0b466]"
          >
            Say hello
            <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
