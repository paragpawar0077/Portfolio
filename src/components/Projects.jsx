import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionKicker from "./SectionKicker";

// THE VISUAL CENTERPIECE of the site. Pulls entries from data/projects.js —
// edit that file to swap in real projects; this component just lays them out.
export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionKicker label="Selected work" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
        {/* EDIT: short section intro */}
        A mix of RAG/LLM systems and applied ML — replace the placeholders in
        data/projects.js with your real work.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
