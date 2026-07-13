# Portfolio — React + Tailwind

A single-page portfolio site built with React (Vite) and Tailwind CSS.
Dark mode by default, with a toggle. Every piece of content lives in
`src/data/`, so you can update the whole site without touching component code.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a static
`dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages).

## Where to edit things

| What you want to change              | File                              |
|---------------------------------------|------------------------------------|
| Name, role, tagline, bio, education, links, résumé path | `src/data/profile.js` |
| Projects (the centerpiece section)    | `src/data/projects.js`            |
| Skill categories & tags               | `src/data/skills.js`              |
| Certifications (optional)             | `src/data/certifications.js`      |
| Open source contributions (optional)  | `src/data/openSource.js`          |
| Work/internship experience (optional) | `src/data/experience.js`          |
| Your résumé PDF                       | `public/resume.pdf` (replace the placeholder file) |

Every placeholder in those files is wrapped in `[BRACKETS]` — search the
project for `[` to find everything still left to fill in.

## Removing optional sections

**Certifications** — leave `src/data/certifications.js` as an empty array
(`[]`). The component hides itself automatically; nothing else on the page
shifts or breaks.

**Open Source contributions** and **Experience** work the same way — set
their data files to `[]` to hide them. If you want them gone for good
(not just hidden), delete the import + the one JSX line for each in
`src/App.jsx`, then delete the component files themselves:
- `src/components/OpenSourceSection.jsx` (+ `src/data/openSource.js`)
- `src/components/ExperienceSection.jsx` (+ `src/data/experience.js`)

## Structure

```
src/
  App.jsx               # composes every section, in order
  main.jsx              # React entry point
  index.css             # Tailwind directives
  data/                 # <-- all your content lives here
    profile.js
    projects.js
    skills.js
    certifications.js
    openSource.js
    experience.js
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    Skills.jsx
    CertificationsList.jsx
    OpenSourceSection.jsx
    ExperienceSection.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    SectionKicker.jsx
```

## Notes

- Dark mode uses Tailwind's `class` strategy (`darkMode: "class"` in
  `tailwind.config.js`). The toggle in `Navbar.jsx` flips a `dark` class
  on `<html>` via `App.jsx`.
- The contact form has no backend — it builds a `mailto:` link from the
  typed fields and opens the visitor's email client. Swap in a real form
  service later if you want actual delivery/analytics.
- Project cards use a code-editor-window motif (traffic-light dots +
  filename-style chrome) instead of generic cards, and RAG/LLM projects
  get a small badge — this is the visual centerpiece, so it's worth
  spending time on real screenshots/demo links once you have them.
