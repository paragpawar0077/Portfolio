import { certifications } from "../data/certifications";

// Compact "[CERT_NAME] – [ISSUER]" list with a Verify link, shown
// alongside Skills. Renders nothing if `certifications` is empty in
// data/certifications.js — safe to leave empty or delete usage entirely.
export default function CertificationsList() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 h-fit">
      <h3 className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
        Certifications
      </h3>
      <ul className="space-y-3">
        {certifications.map((cert, i) => (
          <li key={i} className="text-sm flex items-start justify-between gap-3">
            <div>
              <p className="text-slate-800 dark:text-slate-100 font-medium leading-snug">{cert.name}</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.issuer}</p>
            </div>
            <a
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline whitespace-nowrap"
            >
              Verify ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
