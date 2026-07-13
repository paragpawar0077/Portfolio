import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import SectionKicker from "./SectionKicker";

// Extract the GitHub username from profile.github so this component
// stays in sync automatically if that URL ever changes.
const USERNAME = profile.github.replace(/\/$/, "").split("/").pop();

// Live GitHub activity: profile stats + recently updated repos, pulled
// client-side from GitHub's public REST API (no auth/backend needed).
// Inspired by seeing this done well on a friend's portfolio — rebuilt
// from scratch against your own GitHub username.
export default function GitHubActivity() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        if (!cancelled) {
          setUser(userData);
          setRepos(Array.isArray(reposData) ? reposData : []);
          setStatus("ready");
        }
      } catch (err) {
        // Most common cause: GitHub's unauthenticated rate limit (60/hr per
        // IP) has been hit. Fail quietly rather than showing a broken widget.
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Don't render the section at all if the API call failed — no point
  // showing an empty/broken widget to visitors.
  if (status === "error") return null;

  return (
    <section id="github-activity" className="max-w-6xl mx-auto px-6 py-20">
      <SectionKicker label="Live from GitHub" />
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
        GitHub activity
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xl">
        Pulled directly from the GitHub API — not a static snapshot.
      </p>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatTile label="Followers" value={status === "ready" ? user.followers : null} />
        <StatTile label="Public repos" value={status === "ready" ? user.public_repos : null} />
        <StatTile
          label="Following"
          value={status === "ready" ? user.following : null}
        />
        <StatTile
          label="Member since"
          value={status === "ready" ? new Date(user.created_at).getFullYear() : null}
        />
      </div>

      {/* Recently updated repos */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {status === "loading" &&
          Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)}

        {status === "ready" &&
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-2 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm text-slate-900 dark:text-white truncate">{repo.name}</p>
                {repo.stargazers_count > 0 && (
                  <span className="text-xs font-mono text-amber-500 whitespace-nowrap">
                    ★ {repo.stargazers_count}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[2.2em]">
                {repo.description || "No description provided."}
              </p>
              {repo.language && (
                <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-1 w-fit mt-1">
                  {repo.language}
                </span>
              )}
            </a>
          ))}
      </div>
    </section>
  );
}

function StatTile({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 text-center">
      <p className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
        {value === null || value === undefined ? (
          <span className="inline-block w-8 h-6 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
        ) : (
          value
        )}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</p>
    </div>
  );
}

function RepoSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-3 animate-pulse">
      <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-3 w-4/5 bg-slate-200 dark:bg-slate-800 rounded" />
    </div>
  );
}
