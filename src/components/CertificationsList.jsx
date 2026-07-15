import { certifications } from "../data/certifications";

// Compact cert list with Verify link. Renders nothing if `certifications` is empty.
export default function CertificationsList() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-fit relative overflow-hidden">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500" />

      <div className="p-5">
        <h3 className="font-mono text-xs uppercase tracking-wide text-slate-400 mb-4 flex items-center gap-2">
          <span>🏆</span> Certifications
        </h3>
        <ul className="space-y-4">
          {certifications.map((cert, i) => (
            <li key={i} className="text-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 dark:text-slate-100 font-medium leading-snug">{cert.name}</p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                </div>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-400 border border-cyan-500/30 rounded-lg px-2.5 py-1 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all whitespace-nowrap"
                >
                  Verify ↗
                </a>
              </div>
              {i < certifications.length - 1 && (
                <div className="mt-4 h-px bg-slate-100 dark:bg-slate-800" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
