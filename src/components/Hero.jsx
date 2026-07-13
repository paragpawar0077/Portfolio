import { profile } from "../data/profile";

// Hero section: name, role, tagline, and the four required CTAs
// (Resume, GitHub, LinkedIn, Email). All content comes from profile.js.
export default function Hero() {
  const username = profile.github.replace(/\/$/, "").split("/").pop();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 px-6 md:px-12">
      {/* decorative glow — purely visual */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-indigo-500/10 blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
        {/* Left Column: Info */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Open to internships &amp; freelance work
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-tight">
            {profile.name}
          </h1>

          <p className="mt-3 font-mono text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
            {profile.role}
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 w-full sm:w-auto">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-sm font-semibold px-6 py-3.5 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 font-mono text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative group">
            {/* Ambient background glow behind the picture */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The profile photo frame */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 overflow-hidden flex items-center justify-center">
              <img
                src={`https://github.com/${username}.png`}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover border-2 border-cyan-500/20"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
