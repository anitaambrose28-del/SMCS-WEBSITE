"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Executives", href: "/executives" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-50 w-full bg-[#F7F1E5] px-4 py-4 text-white sm:px-6">
      <nav
        className="mx-auto flex max-w-[90rem] items-center justify-between rounded-full border border-cyan-300/25 bg-[#080b10] px-4 py-2 shadow-[0_0_18px_rgba(34,211,238,0.14)]"
        aria-label="Main navigation"
      >
        <Link href="/" className="group inline-flex items-center rounded-full p-1 transition hover:bg-cyan-300/10" aria-label="Go to SMCSS home">
          <Image
            src="/smcss-logo.png"
            alt="SMCSS"
            width={512}
            height={512}
            className="h-11 w-11 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-cyan-300/20 text-cyan-100 shadow-[0_0_14px_rgba(34,211,238,0.22)]"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent transition-transform duration-500 group-hover:translate-x-[550%]" />
            </Link>
          ))}
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
