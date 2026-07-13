import { useState } from "react";
import { profile } from "../data/profile";

// Sticky top nav with in-page links, a dark/light toggle, and a
// "Hire me" mailto CTA. `isDark` / `onToggleTheme` are lifted up to
// App.jsx so the theme class lives on <html>, not just this component.
export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#github-activity", label: "GitHub" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500" />
          {profile.name}
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark/light toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-sm hover:border-cyan-500 hover:text-cyan-500 transition-colors"
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex text-xs font-mono border border-cyan-600 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 rounded-md px-3 py-2 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-colors"
          >
            Hire me →
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-md border border-slate-300 dark:border-slate-700 flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
