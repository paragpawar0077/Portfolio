import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-3 text-xs font-mono text-slate-400 dark:text-slate-500">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
