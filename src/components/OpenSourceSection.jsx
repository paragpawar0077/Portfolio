import { openSourceContributions } from "../data/openSource";
import SectionKicker from "./SectionKicker";

// CONDITIONAL SECTION — renders null if there's nothing to show.
// Not interleaved with other sections in App.jsx: it's a single import +
// a single <OpenSourceSection /> line, so deleting both removes it cleanly.
export default function OpenSourceSection() {
  if (!openSourceContributions || openSourceContributions.length === 0) return null;

  return (
    <section id="open-source" className="max-w-6xl mx-auto px-6 py-20">
      <SectionKicker label="Open source" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 font-display">Contributions</h2>

      <div className="space-y-4">
        {openSourceContributions.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 hover:border-cyan-500 transition-colors"
          >
            <div>
              <p className="font-mono text-sm text-slate-900 dark:text-white">{c.repo}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{c.description}</p>
            </div>
            <span className="text-cyan-600 dark:text-cyan-400 text-sm whitespace-nowrap">View ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
