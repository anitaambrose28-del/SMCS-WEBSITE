import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SMCSS - School of Mathematical and Computational Sciences Society",
  description:
    "Student locker rentals at UPEI Cass Science Hall. Pricing, rules, location, and reservation instructions.",
};

const lockerRules = [
  "No food may be left in lockers for extended periods. Leaving food too long can result in mold, bad smells, and unwanted bugs.",
  "Lockers must be cleaned out and locks removed by the last day of classes in a semester.",
  "Failure to clean out your locker and remove your lock by the deadline will result in your $10 deposit not being refunded.",
  "Failure to follow the locker rules may result in loss of your deposit.",
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080b10] px-6 py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Student services</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Practical support for
            <span className="block bg-gradient-to-r from-[#cf9946] via-[#b7c8a0] to-[#32c5dc] bg-clip-text text-transparent">your campus life.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Find information about locker rentals and the steps to get started.</p>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-cyan-700">Available service</p>
            <h2 className="text-3xl font-extrabold text-[#161616] sm:text-4xl">Get your locker in Cass Science Hall.</h2>
            <p className="mt-5 leading-8 text-zinc-600">Would you like a locker in the centre of campus? SMCSS sells lockers on the bottom floor of Cass Science Hall for just $10 a semester, plus a $10 deposit.</p>
            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-[#080b10] p-7 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)]">
              <p className="text-sm font-semibold text-slate-300">Rental cost</p>
              <p className="mt-2 text-5xl font-extrabold">$10<span className="ml-2 text-lg font-medium text-slate-300">/ semester</span></p>
              <div className="my-6 h-px bg-white/20" />
              <p className="text-sm font-semibold text-slate-300">Refundable deposit</p>
              <p className="mt-2 text-3xl font-bold text-[#cf9946]">$10</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">The deposit is refunded at the end of the semester when the locker rules are followed.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#161616]/10 bg-white/70 p-7 shadow-sm sm:p-9">
            <h3 className="text-2xl font-bold text-[#161616]">Rental details</h3>
            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl text-cyan-700" aria-hidden="true">⌖</div>
                <div>
                  <h4 className="font-bold text-[#161616]">Location</h4>
                  <p className="mt-1 leading-7 text-zinc-600">Bottom floor of Cass Science Hall</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl text-cyan-700" aria-hidden="true">◷</div>
                <div>
                  <h4 className="font-bold text-[#161616]">Rental period</h4>
                  <p className="mt-1 leading-7 text-zinc-600">One semester</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-xl text-cyan-700" aria-hidden="true">✉</div>
                <div>
                  <h4 className="font-bold text-[#161616]">How to reserve</h4>
                  <p className="mt-1 leading-7 text-zinc-600">Contact any executive member or email to reserve your locker.</p>
                  <a href="mailto:smcss@upeisu.ca" className="mt-2 inline-block font-semibold text-cyan-800 underline decoration-cyan-300 underline-offset-4 hover:text-cyan-600">smcss@upeisu.ca</a>
                </div>
              </div>
            </div>
            <a href="mailto:smcss@upeisu.ca?subject=Locker%20Rental%20Inquiry" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-4 text-center font-bold text-[#080b10] shadow-[0_0_16px_rgba(34,211,238,0.22)] transition hover:bg-cyan-200">Inquire about a locker <span className="ml-2" aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-cyan-700">Before you rent</p>
            <h2 className="text-3xl font-extrabold text-[#161616] sm:text-4xl">Locker rental rules</h2>
            <p className="mt-4 leading-8 text-zinc-600">Please keep these requirements in mind throughout your rental period.</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {lockerRules.map((rule, index) => (
              <div key={rule} className="flex gap-4 rounded-2xl border border-[#161616]/10 bg-[#F7F1E5] p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#cf9946] font-extrabold text-[#161616]" aria-hidden="true">{index + 1}</div>
                <p className="leading-7 text-zinc-700">{rule}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#cf9946]/50 bg-[#cf9946]/10 p-6">
            <p className="font-semibold text-[#161616]">Remember: lockers must be emptied and locks removed by the last day of classes. Otherwise, the deposit will not be refunded.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-300/20 bg-[#080b10] p-8 text-white shadow-[0_18px_42px_rgba(8,11,16,0.18)] sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-200">Payment options</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Simple ways to pay.</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="font-bold">Cash</p>
              <p className="mt-2 text-slate-300">Pay cash to any executive member.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="font-bold">E-transfer</p>
              <p className="mt-2 text-slate-300">Send your payment to <a className="text-cyan-200 underline" href="mailto:smcss@upeisu.ca">smcss@upeisu.ca</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080b10] px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Have questions about locker rentals?</h2>
          <p className="mt-4 leading-8 text-slate-300">Reach out to SMCSS for more information.</p>
          <a href="mailto:smcss@upeisu.ca" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#cf9946] px-8 py-4 font-bold text-[#080b10] transition hover:bg-[#e0b466]">Contact SMCSS</a>
        </div>
      </section>
    </div>
  );
}
