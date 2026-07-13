import { useState } from "react";
import VideoModal from "./VideoModal";

// Single project card, styled like a code-editor window (traffic-light
// dots + a category badge) so the Projects section feels intentional
// rather than a generic card grid. `featured` spans 2 columns on desktop.
export default function ProjectCard({ project, featured = false }) {
  const { name, description, stack, outcome, demoLink, githubLink, videoUrl, category } = project;
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div
      className={`group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* fake editor chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        {category === "rag" && (
          <span className="ml-auto text-[10px] font-mono uppercase tracking-wide text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-full px-2 py-0.5">
            RAG / LLM
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white font-display">{name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">→ {outcome}</p>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {/* Live Demo only renders when a real link is provided — avoids
              shipping a dead/placeholder button for projects with no hosted demo. */}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
            >
              Try it out →
            </a>
          )}
          {/* Watch Demo only renders when videoUrl is set. Nothing is
              downloaded until this is clicked — see VideoModal.jsx. */}
          {videoUrl && (
            <button
              onClick={() => setVideoOpen(true)}
              className="text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 hover:border-amber-500 hover:text-amber-500 transition-colors"
            >
              ▶ Watch Demo
            </button>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} videoUrl={videoUrl} title={name} />
    </div>
  );
}
