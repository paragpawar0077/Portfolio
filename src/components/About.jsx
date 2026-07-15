import { profile } from "../data/profile";
import SectionKicker from "./SectionKicker";

// Bio + education. Both pull straight from data/profile.js.
export default function About() {
  return (
    <section id="about" className="relative max-w-4xl mx-auto px-6 py-24">
      {/* Background orb */}
      <div className="pointer-events-none absolute -right-20 top-1/4 w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-indigo-500/8 to-purple-500/5 blur-3xl" />

      <div className="relative">
        <SectionKicker label="About" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
          A little about my background
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Bio text */}
          <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {profile.bio.map((line, i) => (
              <p key={i} className={i === 0 ? "text-lg font-medium text-slate-700 dark:text-slate-200" : ""}>
                {line}
              </p>
            ))}
          </div>

          {/* Side card — education + quick facts */}
          <div className="md:col-span-2 space-y-4">
            {/* Education */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 relative overflow-hidden">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-indigo-500" />
              <p className="font-mono text-xs text-gradient font-semibold mb-2">{profile.education.year}</p>
              <p className="font-semibold text-slate-900 dark:text-white leading-snug font-display">{profile.education.degree}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{profile.education.university}</p>
            </div>

            {/* Quick-facts card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wide text-slate-400 mb-2">Quick facts</h3>
              {[
                { icon: "🎯", text: "Focus: RAG / LLM systems & ML" },
                { icon: "📍", text: "Based in India" },
                { icon: "🚀", text: "Open to internships & remote work" },
                { icon: "💡", text: "Love turning messy data into insights" },
              ].map((f) => (
                <div key={f.text} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
