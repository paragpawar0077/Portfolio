import { useState, useEffect } from "react";
import { profile } from "../data/profile";

// Sticky top nav with gradient logo, animated active underline, dark toggle,
// and a glowing "Hire me" CTA.
export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#github-activity", label: "GitHub" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm shadow-slate-900/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 group-hover:scale-125 transition-transform duration-200" />
          <span className="font-display tracking-tight">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark/light toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm flex items-center justify-center text-sm hover:border-cyan-500 hover:text-cyan-500 transition-colors duration-200"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Hire me CTA */}
          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
          >
            Hire me →
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:text-cyan-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 text-xs font-mono font-semibold rounded-xl px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-center"
          >
            Hire me →
          </a>
        </nav>
      )}
    </header>
  );
}
