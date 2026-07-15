import { experience } from "../data/experience";
import SectionKicker from "./SectionKicker";

// CONDITIONAL SECTION — leave `experience` empty in data/experience.js to hide it.
export default function ExperienceSection() {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="relative max-w-4xl mx-auto px-6 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute top-0 left-0 w-[25rem] h-[25rem] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative">
        <SectionKicker label="Experience" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 font-display">
          Work &amp; internships
        </h2>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Gradient vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent" />

          <div className="space-y-10">
            {experience.map((e, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <span className="absolute -left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 ring-4 ring-white dark:ring-slate-950 shadow-lg shadow-cyan-500/30 group-hover:scale-125 transition-transform duration-200" />

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5">
                  <p className="font-mono text-xs text-gradient font-semibold mb-1">{e.period}</p>
                  <p className="font-semibold text-slate-900 dark:text-white text-lg font-display">{e.role}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{e.org}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{e.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
