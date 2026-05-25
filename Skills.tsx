import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { coreProficiency, skillCategories } from "../data/portfolio";

const CATEGORY_ICON_BG: Record<string, string> = {
  Languages: "from-sky-500 to-brand-500",
  Frameworks: "from-brand-500 to-accent-500",
  "UI / Styling": "from-fuchsia-500 to-rose-500",
  "Data / Viz": "from-emerald-500 to-teal-500",
  "Version Control": "from-amber-500 to-orange-500",
  "Work Management": "from-violet-500 to-indigo-500",
  Design: "from-pink-500 to-rose-500",
  Methodology: "from-slate-500 to-ink-700",
};

export default function Skills() {
  const radarOption = useMemo<EChartsOption>(() => {
    const max = 100;
    return {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        backgroundColor: "#ffffff",
        borderColor: "#dde1ec",
        borderWidth: 1,
        textStyle: { color: "#23283f", fontSize: 12, fontWeight: 500 },
        padding: [8, 12],
      },
      radar: {
        indicator: coreProficiency.map((s) => ({ name: s.name, max })),
        shape: "polygon",
        center: ["50%", "55%"],
        radius: "70%",
        axisName: {
          color: "#4a5170",
          fontSize: 12,
          fontWeight: 600,
          padding: [0, 4],
        },
        splitNumber: 4,
        splitLine: {
          lineStyle: {
            color: "rgba(99, 122, 175, 0.18)",
          },
        },
        splitArea: {
          areaStyle: {
            color: [
              "rgba(51, 128, 255, 0.02)",
              "rgba(51, 128, 255, 0.05)",
              "rgba(51, 128, 255, 0.08)",
              "rgba(51, 128, 255, 0.11)",
            ],
          },
        },
        axisLine: {
          lineStyle: { color: "rgba(99, 122, 175, 0.25)" },
        },
      },
      series: [
        {
          name: "Proficiency",
          type: "radar",
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { width: 2, color: "#3380ff" },
          itemStyle: { color: "#3380ff" },
          areaStyle: {
            color: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.7,
              colorStops: [
                { offset: 0, color: "rgba(124, 140, 255, 0.45)" },
                { offset: 1, color: "rgba(51, 128, 255, 0.10)" },
              ],
            },
          },
          data: [
            {
              value: coreProficiency.map((s) => s.value),
              name: "Core Proficiency",
            },
          ],
        },
      ],
    };
  }, []);

  return (
    <section id="skills" className="section bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Toolbelt
          </span>
          <h2 className="section-title">
            A focused stack, <span className="gradient-text">deeply known.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Years of shipping production interfaces have shaped a tight,
            opinionated set of tools — visualized here.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Radar chart */}
          <div className="card relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-50/60 via-white to-accent-400/5"
              aria-hidden
            />
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                Core Proficiency
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Apache ECharts
              </span>
            </div>
            <ReactECharts
              option={radarOption}
              style={{ height: 380, width: "100%" }}
              opts={{ renderer: "svg" }}
            />
          </div>

          {/* Skill grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="card card-hover h-full">
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      "inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br",
                      CATEGORY_ICON_BG[cat.title] ?? "from-brand-500 to-accent-500",
                    ].join(" ")}
                  />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-700">
                    {cat.title}
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-700 ring-1 ring-inset ring-ink-100 transition-colors hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
