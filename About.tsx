import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import { education, languages, profile } from "../data/portfolio";

const PILLARS = [
  {
    title: "Architect",
    description:
      "Designs scalable React.js dashboards and component libraries that hold up under real-world load.",
  },
  {
    title: "Optimize",
    description:
      "Tunes performance with lazy loading, memoization, and clean state via Redux Toolkit & Context.",
  },
  {
    title: "Mentor",
    description:
      "Leads code reviews, drives stack migrations, and levels up junior engineers with clear standards.",
  },
];

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-tight">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              About
            </span>
            <h2 className="section-title">
              Building polished interfaces for{" "}
              <span className="gradient-text">complex domains.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="card card-hover">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <RocketLaunchRoundedIcon fontSize="small" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: education + languages */}
          <aside className="space-y-5">
            <div className="card relative overflow-hidden">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/70 blur-2xl"
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                  <SchoolRoundedIcon fontSize="small" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                    Education
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-ink-600">{education.school}</p>
                  <p className="mt-1 text-xs font-medium text-ink-400">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-900 text-white">
                  <TranslateRoundedIcon fontSize="small" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                    Languages
                  </p>
                  <ul className="mt-2 space-y-2">
                    {languages.map((l) => (
                      <li
                        key={l.name}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="font-medium text-ink-800">
                          {l.name}
                        </span>
                        <span className="text-ink-500">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-ink-900 to-ink-800 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Domains I've shipped in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Energy",
                  "Ride-hailing",
                  "Queue Mgmt",
                  "FinTech",
                  "Enterprise SaaS",
                ].map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
