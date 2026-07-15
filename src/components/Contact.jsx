import { useState } from "react";
import { profile } from "../data/profile";
import SectionKicker from "./SectionKicker";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // No backend required: builds a mailto: link from the form fields and
  // opens it. Swap for a real form service (Formspree, Resend, etc.) later.
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full bg-gradient-to-t from-cyan-500/8 to-transparent blur-3xl" />

      <div className="relative">
        <SectionKicker label="Get in touch" />
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 font-display">
          Let's build something.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-xl">
          Have a project, role, or idea? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact links */}
          <div className="space-y-4">
            <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} icon="✉️" />
            <ContactRow label="LinkedIn" value="View profile ↗" href={profile.linkedin} external icon="💼" />
            <ContactRow label="GitHub" value="View profile ↗" href={profile.github} external icon="⚡" />

            {/* Availability notice */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 px-5 py-4 mt-6 flex items-start gap-3">
              <span className="text-amber-400 text-lg mt-0.5">🟢</span>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Available for opportunities</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Open to internships, contract, and freelance projects</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 relative overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-indigo-500" />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
              />
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
              />
            </div>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Say hello, or tell me about the role/project..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
            />
            <button
              type="submit"
              className={`w-full rounded-xl font-mono text-sm py-3 font-semibold transition-all duration-200 ${
                sent
                  ? "bg-emerald-500 text-white"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:brightness-110 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
              }`}
            >
              {sent ? "✓ Opening email client…" : "Send message →"}
            </button>
            <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
              Opens your email client — no data stored elsewhere.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href, external, icon }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 hover:border-cyan-500/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-200 group"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="font-mono text-xs uppercase tracking-wide text-slate-400">{label}</span>
      </div>
      <span className="text-sm text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">{value}</span>
    </a>
  );
}
