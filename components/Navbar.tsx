"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { CONTACT } from "@/lib/data";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#certificates", label: "Certifications" },
  { href: "#gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Scroll progress
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      // Active section detection
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 120) current = `#${s.id}`;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ===== Scroll progress bar ===== */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-transparent"
      >
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ===== Top utility bar ===== */}
      <div className="hidden border-b border-white/10 bg-brand text-white md:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-6 text-xs">
          <span className="tracking-wide text-white/70">
            BAIRA Licensed Agency · RL-2037 · Est. since 2009
          </span>
          <div className="flex items-center gap-5 text-white/80">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone size={12} />
              {CONTACT.phoneDisplay}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail size={12} />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* ===== Main nav ===== */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-brand text-sm font-bold text-white">
              CV
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-brand">
                Cello Vista
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-slate-500">
                International
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={activeId === link.href}
                  className="link-underline text-sm font-medium text-slate-700 transition-colors hover:text-brand data-[active=true]:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark md:inline-flex"
            >
              Get in Touch
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="-mr-2 p-2 text-slate-800 transition-colors hover:text-brand lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ===== Mobile menu (animated slide) ===== */}
      <div
        className={`overflow-hidden border-b border-slate-200 bg-white transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-6xl px-6 py-4">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
              className={`transform transition-all duration-300 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 last:border-b-0 hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-brand px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}