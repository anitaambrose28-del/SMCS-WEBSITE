import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/20 bg-[#050707] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold" aria-label="UPEI SMCSS home">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-300 font-serif text-lg text-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.35)]"
            >
              &pi;
            </span>
            UPEI SMCSS
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-stone-300">
            Where math meets code and friendships compute. Find your community, learn
            together, and get involved.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-cyan-200">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            <li><Link href="/about" className="transition-colors hover:text-cyan-200">About</Link></li>
            <li><Link href="/events" className="transition-colors hover:text-cyan-200">Events</Link></li>
            <li><Link href="/executives" className="transition-colors hover:text-cyan-200">Executives</Link></li>
            <li><Link href="/services" className="transition-colors hover:text-cyan-200">Services</Link></li>
            <li><Link href="/resources" className="transition-colors hover:text-cyan-200">Resources</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-cyan-200">Connect with us</h2>
          <div className="mt-4 space-y-3 text-sm text-stone-300">
            <p><a href="mailto:smcss@upeisu.ca" className="transition-colors hover:text-cyan-200">smcss@upeisu.ca</a></p>
            <p><a href="https://www.instagram.com/upeismcss" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-200">Instagram <span aria-hidden="true">↗</span></a></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-cyan-300/20 pt-6 text-sm text-slate-300">
        &copy; {new Date().getFullYear()} UPEI SMCSS. All rights reserved.
      </div>
    </footer>
  );
}
