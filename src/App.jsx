import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GitHubActivity from "./components/GitHubActivity";
import OpenSourceSection from "./components/OpenSourceSection"; // OPTIONAL — see note below
import ExperienceSection from "./components/ExperienceSection"; // OPTIONAL — see note below
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Dark mode is the default (isDark starts true). Toggling flips the
  // `dark` class on <html>, which is what Tailwind's `dark:` variants key off.
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />

      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Skills />
      <GitHubActivity />

      {/* --------------------------------------------------------------
          OPTIONAL SECTIONS (Open Source)

          OpenSourceSection already auto-hides itself (returns null)
          when its data file is an empty array — see data/openSource.js.

          To remove it completely: delete its import above and its single JSX line below.
      --------------------------------------------------------------- */}
      <OpenSourceSection />

      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
