import { profile } from "../data/profile";

// Prominent, standalone résumé download CTA.
export default function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-8 py-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
          Résumé
        </p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Want the full picture?</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Download my up-to-date résumé — PDF, one page.
        </p>
        {/* EDIT: replace profile.resumeUrl in data/profile.js with your hosted PDF path */}
        <a
          href={profile.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-mono text-sm px-6 py-3 hover:bg-cyan-400 hover:-translate-y-0.5 transition-all"
        >
          Download Résumé (PDF)
        </a>
      </div>
    </section>
  );
}
