import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { navItems, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-100 bg-white">
      <div className="container-tight py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink-900"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
                <span className="text-sm font-extrabold">A</span>
              </span>
              {profile.shortName}.dev
            </a>
            <p className="mt-3 max-w-md text-sm text-ink-500">
              {profile.title} · React.js Specialist crafting clean, scalable
              interfaces from {profile.location}.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-ink-600 hover:text-brand-700"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                aria-label="Email Areeb"
              >
                <EmailRoundedIcon fontSize="small" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </a>
              <a
                href="#top"
                className="ml-1 inline-flex items-center gap-1 rounded-full border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                Back to top
                <ArrowUpwardRoundedIcon style={{ fontSize: 14 }} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-ink-100 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© {year} Muhammad Areeb Zahid. All rights reserved.</p>
          <p>
            Built with React, TypeScript, Vite, Tailwind, MUI, ECharts &
            Leaflet.
          </p>
        </div>
      </div>
    </footer>
  );
}
