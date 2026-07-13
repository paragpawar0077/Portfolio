import { useState } from "react";
import { profile } from "../data/profile";
import SectionKicker from "./SectionKicker";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // No backend required: builds a mailto: link from the form fields and
  // opens it. Swap this for a real form service (Formspree, Resend, etc.)
  // later if you want actual delivery/analytics.
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <SectionKicker label="Get in touch" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 font-display">
        Let's build something.
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact links — email / LinkedIn / GitHub */}
        <div className="space-y-3">
          <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow label="LinkedIn" value="View profile ↗" href={profile.linkedin} external />
          <ContactRow label="GitHub" value="View profile ↗" href={profile.github} external />
        </div>

        {/* Optional contact form — non-blocking, works without a backend */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Say hello, or tell me about the role/project..."
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 text-slate-950 font-mono text-sm py-3 hover:bg-cyan-400 transition-colors"
          >
            Send message
          </button>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Opens your email client — no data is stored or sent anywhere else.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-4 hover:border-cyan-500 transition-colors"
    >
      <span className="font-mono text-xs uppercase tracking-wide text-slate-400">{label}</span>
      <span className="text-sm text-slate-800 dark:text-slate-100">{value}</span>
    </a>
  );
}
