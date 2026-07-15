import { skillGroups } from "../data/skills";
import SectionKicker from "./SectionKicker";
import CertificationsList from "./CertificationsList";

// Icon map for skill categories — purely visual
const CATEGORY_ICONS = {
  Languages: "{ }",
  "ML / AI": "🤖",
  "LLM / RAG": "🧠",
  "Data & Viz": "📊",
  Databases: "🗄",
  "Dev Tools": "⚙️",
  Cloud: "☁️",
  Backend: "🔧",
  Frontend: "🎨",
};

// Tag color variation — cycles through a few accent colors
const TAG_VARIANTS = [
  "text-cyan-600 dark:text-cyan-300 bg-cyan-500/8 dark:bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-400",
  "text-indigo-600 dark:text-indigo-300 bg-indigo-500/8 dark:bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-400",
  "text-violet-600 dark:text-violet-300 bg-violet-500/8 dark:bg-violet-500/10 border-violet-500/20 hover:border-violet-400",
  "text-teal-600 dark:text-teal-300 bg-teal-500/8 dark:bg-teal-500/10 border-teal-500/20 hover:border-teal-400",
];

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative">
        <SectionKicker label="Toolbox" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 font-display">
          Skills
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
          Technologies and tools I reach for when building AI-powered applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Skill categories */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group, gi) => {
              const variant = TAG_VARIANTS[gi % TAG_VARIANTS.length];
              const icon = CATEGORY_ICONS[group.title] ?? "◆";
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200 group"
                >
                  <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <span className="text-base">{icon}</span>
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs rounded-full px-3 py-1 border transition-all duration-200 font-mono ${variant}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <CertificationsList />
        </div>
      </div>
    </section>
  );
}
