import { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { projects, type Project } from "../data/portfolio";

type View = "grid" | "table";

const CATEGORIES = [
  "All",
  "Energy",
  "Enterprise",
  "Mobility",
  "Queue Management",
  "FinTech",
] as const;

export default function Projects() {
  const [view, setView] = useState<View>("grid");
  const [filter, setFilter] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section bg-white">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Selected Work
            </span>
            <h2 className="section-title">
              Projects that{" "}
              <span className="gradient-text">moved the needle.</span>
            </h2>
            <p className="mt-4 text-ink-600">
              A snapshot of platforms I've built or led across energy,
              ride-hailing, queue management, and FinTech.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-ink-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={[
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                view === "grid"
                  ? "bg-ink-900 text-white shadow-soft"
                  : "text-ink-500 hover:text-ink-800",
              ].join(" ")}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView("table")}
              className={[
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                view === "table"
                  ? "bg-ink-900 text-white shadow-soft"
                  : "text-ink-500 hover:text-ink-800",
              ].join(" ")}
            >
              Table
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={[
                  "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all",
                  active
                    ? "bg-brand-600 text-white shadow-soft"
                    : "border border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {view === "grid" ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <ProjectsTable data={filtered} />
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card card-hover relative flex h-full flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-brand-100 to-accent-400/30 opacity-70 blur-2xl"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
            {project.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
            {project.name}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-ink-500">
            {project.company}
          </p>
        </div>
        {project.status === "Current" ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200">
            <StarRoundedIcon style={{ fontSize: 12 }} />
            Current
          </span>
        ) : (
          <span className="inline-flex shrink-0 items-center rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600 ring-1 ring-inset ring-ink-200">
            Shipped
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-600">
        {project.summary}
      </p>

      <div
        className={[
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0">
          <ul className="mt-4 space-y-2 border-t border-dashed border-ink-200 pt-4">
            {project.details.map((d) => (
              <li
                key={d}
                className="flex gap-2 text-sm leading-relaxed text-ink-600"
              >
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-700 ring-1 ring-inset ring-ink-100"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
      >
        {open ? "Show less" : "View details"}
        <ChevronRightRoundedIcon
          className={[
            "transition-transform duration-200",
            open ? "rotate-90" : "rotate-0",
          ].join(" ")}
          style={{ fontSize: 18 }}
        />
      </button>
    </article>
  );
}

function ProjectsTable({ data }: { data: Project[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Project>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Project",
        cell: (info) => (
          <div>
            <div className="font-semibold text-ink-900">
              {info.row.original.name}
            </div>
            <div className="text-xs text-ink-500">
              {info.row.original.company}
            </div>
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Domain",
        cell: (info) => (
          <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-100">
            {info.getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
          const v = info.getValue<string>();
          return v === "Current" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <StarRoundedIcon style={{ fontSize: 12 }} />
              {v}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-600 ring-1 ring-inset ring-ink-200">
              {v}
            </span>
          );
        },
      },
      {
        accessorKey: "tech",
        header: "Tech",
        enableSorting: false,
        cell: (info) => {
          const techs = info.getValue<string[]>();
          return (
            <div className="flex flex-wrap gap-1">
              {techs.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-700 ring-1 ring-inset ring-ink-100"
                >
                  {t}
                </span>
              ))}
              {techs.length > 4 && (
                <span className="rounded-md bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-500 ring-1 ring-inset ring-ink-100">
                  +{techs.length - 4}
                </span>
              )}
            </div>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50/60 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
          Powered by TanStack Table
        </p>
        <p className="text-xs text-ink-400">{data.length} entries</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white text-xs font-semibold uppercase tracking-wider text-ink-500">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b border-ink-100">
                {hg.headers.map((header) => {
                  const sortable = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      className={[
                        "px-5 py-3",
                        sortable ? "cursor-pointer select-none" : "",
                      ].join(" ")}
                      onClick={
                        sortable
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      <span className="inline-flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {sortable && (
                          <span className="text-ink-300">
                            {sorted === "asc" ? (
                              <ArrowUpwardRoundedIcon style={{ fontSize: 14 }} />
                            ) : sorted === "desc" ? (
                              <ArrowDownwardRoundedIcon
                                style={{ fontSize: 14 }}
                              />
                            ) : (
                              <SwapVertRoundedIcon style={{ fontSize: 14 }} />
                            )}
                          </span>
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-ink-100">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="transition-colors hover:bg-brand-50/40"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-5 py-4 align-top">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-10 text-center text-sm text-ink-400"
                >
                  <LaunchRoundedIcon className="mb-2" /> No projects in this
                  category yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
