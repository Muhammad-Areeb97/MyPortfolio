import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-brand-50/60 to-transparent"
        aria-hidden
      />
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Experience
          </span>
          <h2 className="section-title">
            5+ years <span className="gradient-text">shipping</span> in production.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            From early UI engineering to architecting global dashboards — a
            steady arc of growing scope and ownership.
          </p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl border-l border-dashed border-ink-200 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <li key={exp.company + exp.period} className="relative pb-12 last:pb-0">
              {/* Marker */}
              <span
                className={[
                  "absolute -left-[33px] top-1 grid h-7 w-7 place-items-center rounded-full ring-4 ring-ink-50 sm:-left-[49px] sm:h-9 sm:w-9",
                  idx === 0
                    ? "bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow"
                    : "bg-white text-brand-600 ring-ink-50 border border-ink-200",
                ].join(" ")}
                aria-hidden
              >
                <BusinessRoundedIcon style={{ fontSize: idx === 0 ? 18 : 16 }} />
              </span>

              <div className="card card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {exp.role}{" "}
                      <span className="text-brand-600">@ {exp.company}</span>
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                      {exp.period}
                    </p>
                  </div>
                  {idx === 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      <span className="relative inline-flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                        <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-ink-600">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                        <CheckRoundedIcon style={{ fontSize: 14 }} />
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
