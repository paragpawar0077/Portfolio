// Small reusable label used above every section heading.
// Now has a gradient line accent and dot marker for a premium look.
export default function SectionKicker({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
      <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-indigo-500" />
      <span className="text-gradient font-semibold">{label}</span>
    </div>
  );
}
