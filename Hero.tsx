import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { profile } from "../data/portfolio";

const HIGHLIGHT_TECH = [
  "React.js",
  "TypeScript",
  "Redux Toolkit",
  "ECharts",
  "Tailwind CSS",
  "Material UI",
  "Leaflet",
  "TanStack Table",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-36"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-aurora" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-grid-soft [background-size:34px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_85%)]"
        aria-hidden
      />

      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 shadow-sm backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/60" />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for select frontend opportunities
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="gradient-text">Muhammad Areeb Zahid.</span>
              <br />
              I craft{" "}
              <span className="relative inline-block">
                <span className="relative z-10">scalable</span>
                <span
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-brand-200/70 sm:bottom-1.5 sm:h-4"
                  aria-hidden
                />
              </span>{" "}
              React interfaces.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Senior Frontend Developer with{" "}
              <span className="font-semibold text-ink-800">
                5+ years of experience
              </span>{" "}
              architecting complex dashboards, leading stack migrations, and
              mentoring engineers across energy, ride-hailing, and enterprise
              SaaS.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowForwardRoundedIcon fontSize="small" />
              </a>
              <a href="#contact" className="btn-ghost">
                <EmailRoundedIcon fontSize="small" />
                Get in Touch
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-ink-600">
              <span className="inline-flex items-center gap-1.5">
                <LocationOnRoundedIcon
                  fontSize="small"
                  className="text-brand-600"
                />
                {profile.location}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:inline-block" />
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-ink-700 underline-offset-4 hover:text-brand-700 hover:underline"
              >
                {profile.email}
              </a>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
                Core toolbelt
              </p>
              <div className="flex flex-wrap gap-2">
                {HIGHLIGHT_TECH.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none">
      {/* Glow */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-300/40 via-accent-400/30 to-transparent blur-2xl"
        aria-hidden
      />

      <div className="relative rounded-3xl border border-ink-100 bg-white/80 p-6 shadow-soft backdrop-blur">
        {/* Window header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[11px] text-ink-400">
            areeb.tsx
          </span>
        </div>

        <pre className="mt-4 overflow-hidden rounded-xl bg-ink-900 p-5 font-mono text-[12px] leading-relaxed text-ink-100 sm:text-[13px]">
          <code>
            <span className="text-accent-400">const</span>{" "}
            <span className="text-brand-300">areeb</span>{" "}
            <span className="text-ink-300">=</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-emerald-300">role</span>
            <span className="text-ink-300">:</span>{" "}
            <span className="text-amber-300">"Senior Frontend Developer"</span>
            ,{"\n"}
            {"  "}
            <span className="text-emerald-300">stack</span>
            <span className="text-ink-300">:</span> [
            {"\n"}
            {"    "}
            <span className="text-amber-300">"React.js"</span>,{" "}
            <span className="text-amber-300">"TypeScript"</span>,{"\n"}
            {"    "}
            <span className="text-amber-300">"Redux Toolkit"</span>,{" "}
            <span className="text-amber-300">"Tailwind"</span>,{"\n"}
            {"    "}
            <span className="text-amber-300">"ECharts"</span>,{" "}
            <span className="text-amber-300">"Leaflet"</span>,
            {"\n"}
            {"  "}],{"\n"}
            {"  "}
            <span className="text-emerald-300">focus</span>
            <span className="text-ink-300">:</span>{" "}
            <span className="text-amber-300">"Scalable dashboards"</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-300">based</span>
            <span className="text-ink-300">:</span>{" "}
            <span className="text-amber-300">"Karachi, PK"</span>,{"\n"}
            {"}"};
          </code>
        </pre>

        {/* Stat tiles */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <Stat label="Years" value="5+" />
          <Stat label="Projects" value="12+" />
          <Stat label="Companies" value="4" />
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-3 top-10 hidden animate-float rounded-2xl border border-ink-100 bg-white px-3 py-2 text-xs font-semibold text-ink-700 shadow-card sm:flex">
        <span className="mr-2 text-brand-600">React</span> Specialist
      </div>
      <div className="absolute -right-3 bottom-10 hidden animate-float rounded-2xl border border-ink-100 bg-white px-3 py-2 text-xs font-semibold text-ink-700 shadow-card [animation-delay:1.5s] sm:flex">
        <span className="mr-2 text-accent-500">TS</span> Type-Safe
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-3 text-center">
      <div className="font-display text-2xl font-bold gradient-text">
        {value}
      </div>
      <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-ink-400">
        {label}
      </div>
    </div>
  );
}
