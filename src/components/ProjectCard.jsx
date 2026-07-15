import { useState } from "react";
import VideoModal from "./VideoModal";

// Category config — maps category keys to gradient colors and labels
const CATEGORY_CONFIG = {
  rag: {
    label: "RAG / LLM",
    bar: "from-amber-400 via-orange-400 to-rose-400",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  ml: {
    label: "ML Model",
    bar: "from-cyan-400 via-teal-400 to-emerald-400",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  data: {
    label: "Data",
    bar: "from-indigo-400 via-violet-400 to-purple-400",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  },
  default: {
    label: "Project",
    bar: "from-cyan-400 via-indigo-400 to-purple-400",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
};

// Single project card. `featured` spans 2 columns on desktop.
export default function ProjectCard({ project, featured = false }) {
  const { name, description, stack, outcome, demoLink, githubLink, videoUrl, category } = project;
  const [videoOpen, setVideoOpen] = useState(false);

  const cfg = CATEGORY_CONFIG[category] ?? CATEGORY_CONFIG.default;

  return (
    <div
      className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* Gradient top bar (replaces flat editor chrome) */}
      <div className={`h-1 w-full bg-gradient-to-r ${cfg.bar} opacity-80 group-hover:opacity-100 transition-opacity`} />

      {/* Editor chrome row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span
          className={`ml-auto text-[10px] font-mono uppercase tracking-wide border rounded-full px-2.5 py-0.5 ${cfg.badge}`}
        >
          {cfg.label}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white font-display group-hover:text-gradient transition-all duration-300">
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2">
          {stack.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-cyan-600 dark:text-cyan-300 bg-cyan-500/8 dark:bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-1 hover:border-cyan-400 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Outcome metric — styled as a callout */}
        <div className="rounded-xl bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 border border-cyan-500/15 px-4 py-3">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="text-gradient font-semibold mr-1">→</span>
            {outcome}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5 transition-all duration-200"
            >
              Try it out →
            </a>
          )}
          {videoUrl && (
            <button
              onClick={() => setVideoOpen(true)}
              className="text-xs font-mono border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/5 transition-all duration-200"
            >
              ▶ Watch Demo
            </button>
          )}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5 transition-all duration-200 flex items-center gap-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} videoUrl={videoUrl} title={name} />
    </div>
  );
}
