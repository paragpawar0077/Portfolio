// Small reusable label used above every section heading
// (e.g. "SELECTED WORK", "ABOUT"). Purely presentational.
export default function SectionKicker({ label }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
      <span className="w-6 h-px bg-cyan-500" />
      {label}
    </div>
  );
}
