import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100/80 bg-white/80 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-ink-900"
        >
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
            <span className="text-sm font-extrabold">A</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>
          <span className="hidden sm:inline">{profile.shortName}.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 bg-white text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseRoundedIcon fontSize="small" />
          ) : (
            <MenuRoundedIcon fontSize="small" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden",
          "overflow-hidden border-b border-ink-100/80 bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container-tight flex flex-col gap-1 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
