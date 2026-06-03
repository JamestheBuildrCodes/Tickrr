"use client";

import { useEffect, useState } from "react";
import { HiveLogo } from "@/components/icons";

const links = [
  { label: "Features", href: "#features" },
  { label: "Rankings", href: "#rankings" },
  { label: "Sentiment", href: "#sentiment" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(7,11,20,0.72)] border-b border-[var(--th-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="th-container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-semibold text-[var(--th-text)]">
          <span className="grid place-items-center w-9 h-9 rounded-xl glow-ring text-[var(--th-primary)] hover-rotate">
            <HiveLogo width={22} height={22} />
          </span>
          <span className="text-lg tracking-tight">Trade<span className="th-gradient-text">Hive</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm text-[var(--th-muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--th-text)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#waitlist" className="text-sm text-[var(--th-muted)] hover:text-[var(--th-text)] transition-colors">
            Sign in
          </a>
          <a href="#waitlist" className="btn-primary text-sm">Join the hive</a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-[var(--th-border-strong)] text-[var(--th-text)]"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden th-container pb-4">
          <ul className="flex flex-col gap-1 rounded-2xl border border-[var(--th-border)] bg-[var(--th-surface)] p-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-[var(--th-muted)] hover:text-[var(--th-text)] hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="p-2">
              <a href="#waitlist" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Join the hive
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
