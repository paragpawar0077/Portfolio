import { experience } from "../data/experience";
import SectionKicker from "./SectionKicker";

// CONDITIONAL SECTION — same removable pattern as OpenSourceSection.
// Leave `experience` empty in data/experience.js to hide it, or delete
// the import + <ExperienceSection /> line in App.jsx to remove for good.
export default function ExperienceSection() {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <SectionKicker label="Experience" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10">
        Work &amp; internships
      </h2>

      <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10">
        {experience.map((e, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950" />
            <p className="font-mono text-xs text-cyan-600 dark:text-cyan-400">{e.period}</p>
            <p className="font-semibold text-slate-900 dark:text-white mt-1">{e.role}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{e.org}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{e.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
