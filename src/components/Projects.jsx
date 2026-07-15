import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionKicker from "./SectionKicker";

// THE VISUAL CENTERPIECE of the site. Pulls entries from data/projects.js —
// edit that file to swap in real projects; this component just lays them out.
export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] rounded-full bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl" />

      <div className="relative">
        <SectionKicker label="Selected work" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 font-display">
          Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl text-base leading-relaxed">
          RAG/LLM systems, ML models, and data analysis —{" "}
          <span className="text-gradient font-medium">end-to-end, from raw data to results.</span>
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
