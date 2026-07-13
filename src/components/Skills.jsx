import { skillGroups } from "../data/skills";
import SectionKicker from "./SectionKicker";
import CertificationsList from "./CertificationsList";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionKicker label="Toolbox" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 font-display">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Skill categories — data/skills.js */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900"
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications — self-contained, auto-hides when empty.
            See components/CertificationsList.jsx + data/certifications.js */}
        <CertificationsList />
      </div>
    </section>
  );
}
