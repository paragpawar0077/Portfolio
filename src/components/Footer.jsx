import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <a href="#top" className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 group-hover:scale-125 transition-transform" />
          <span className="font-display text-sm">{profile.name}</span>
        </a>

        {/* Copyright */}
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
          © {year} {profile.name} · Built with React + Tailwind
        </p>

        {/* Quick links */}
        <div className="flex items-center gap-5 text-xs text-slate-400 dark:text-slate-500">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-cyan-500 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
