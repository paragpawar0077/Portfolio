import { profile } from "../data/profile";
import SectionKicker from "./SectionKicker";

// Bio + education. Both pull straight from data/profile.js.
export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <SectionKicker label="About" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display">
        A little about my background
      </h2>

      {/* EDIT: bio lines — data/profile.js -> profile.bio (array of strings) */}
      <div className="space-y-3 text-slate-600 dark:text-slate-300 max-w-2xl">
        {profile.bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* EDIT: education — data/profile.js -> profile.education */}
      <div className="mt-8 inline-flex flex-col gap-1 border-l-2 border-cyan-500 pl-4">
        <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">{profile.education.year}</span>
        <span className="font-semibold text-slate-900 dark:text-white">{profile.education.degree}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{profile.education.university}</span>
      </div>
    </section>
  );
}
