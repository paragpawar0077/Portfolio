import { profile } from "../data/profile";

// Hero section: name, role, tagline, and the four required CTAs
// (Resume, GitHub, LinkedIn, Email). All content comes from profile.js.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-20 px-6">
      {/* decorative glow — purely visual, safe to delete */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Avatar pulled directly from GitHub — stays in sync automatically,
            no image file to upload/maintain. Falls back silently if it 404s. */}
        <img
          src={`https://github.com/${profile.github.replace(/\/$/, "").split("/").pop()}.png`}
          alt={profile.name}
          className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-cyan-500/40 object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        <p className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Open to internships &amp; freelance work
        </p>

        {/* EDIT: name — pulled from data/profile.js */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          {profile.name}
        </h1>

        {/* EDIT: role title — data/profile.js */}
        <p className="mt-3 font-mono text-slate-500 dark:text-slate-400">{profile.role}</p>

        {/* EDIT: one-line pitch — data/profile.js */}
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-mono text-sm px-5 py-3 hover:bg-cyan-400 hover:-translate-y-0.5 transition-all"
          >
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono text-sm px-5 py-3 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono text-sm px-5 py-3 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono text-sm px-5 py-3 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
