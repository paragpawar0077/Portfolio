import { profile } from "../data/profile";

// Hero section: name, role, tagline, and the four required CTAs.
// Elevated with animated gradient orbs, shimmer name, stat badges, and icons.
export default function Hero() {
  const username = profile.github.replace(/\/$/, "").split("/").pop();

  const stats = [
    { value: "3+", label: "Projects shipped" },
    { value: "RAG", label: "/ LLM systems" },
    { value: "96.7%", label: "Recall achieved" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 px-6 md:px-12">
      {/* ── Decorative orbs ── */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-purple-500/5 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-500/5 to-transparent blur-3xl -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[20rem] h-[20rem] rounded-full bg-cyan-500/5 blur-2xl" />

      {/* ── Grid layout ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">

        {/* Left Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1 animate-slide-up">

          {/* Status badge */}
          <p className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Open to internships &amp; freelance work
          </p>

          {/* Name with gradient shimmer */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display leading-tight">
            <span className="text-slate-900 dark:text-white">{profile.name.split(" ")[0]} </span>
            <span className="text-gradient animate-gradient-x">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* Role */}
          <p className="mt-3 font-mono text-sm sm:text-base font-semibold text-cyan-500 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-4 h-px bg-cyan-500" />
            {profile.role}
          </p>

          {/* Tagline */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          {/* Stat pills */}
          <div className="mt-7 flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm px-4 py-2"
              >
                <span className="font-bold text-lg font-display text-gradient">{s.value}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3 w-full sm:w-auto">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-mono text-sm font-semibold px-6 py-3.5 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-indigo-500 hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email
            </a>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative group animate-float">
            {/* Spinning gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-40 dark:opacity-60 blur-xl group-hover:opacity-80 transition duration-700" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-75 animate-gradient-x" />

            {/* Photo frame */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full p-1 bg-slate-950 overflow-hidden">
              <img
                src={`https://github.com/${username}.png`}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl px-3 py-1.5 shadow-lg shadow-cyan-500/30">
              <span className="text-xs font-mono font-bold text-white">AI / ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
