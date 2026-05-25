import { useEffect, useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { profile } from "../data/portfolio";

// Build a soft, brand-colored Leaflet marker using a divIcon (no asset path issues).
const brandIcon = L.divIcon({
  className: "",
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -14],
  html: `
    <div style="position:relative;display:grid;place-items:center;width:28px;height:28px;">
      <span style="position:absolute;inset:0;border-radius:9999px;background:rgba(51,128,255,0.35);animation:pulseRing 1.8s cubic-bezier(0.22,1,0.36,1) infinite;"></span>
      <span style="position:relative;display:block;width:14px;height:14px;border-radius:9999px;background:linear-gradient(135deg,#3380ff,#7c8cff);box-shadow:0 0 0 4px white,0 6px 14px -4px rgba(51,128,255,0.6);"></span>
    </div>
    <style>
      @keyframes pulseRing {
        0% { transform: scale(0.9); opacity: 0.7; }
        100% { transform: scale(2.2); opacity: 0; }
      }
    </style>
  `,
});

export default function Contact() {
  const center = useMemo<[number, number]>(
    () => [profile.coordinates.lat, profile.coordinates.lng],
    [],
  );

  // Ensure leaflet recomputes size if the section was rendered while hidden
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-aurora"
        aria-hidden
      />
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Get in touch
          </span>
          <h2 className="section-title">
            Let's build something{" "}
            <span className="gradient-text">delightful.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Open to senior frontend roles, contract work, and interesting
            collaborations. The fastest way to reach me is email.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details */}
          <div className="card relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/70 blur-2xl"
              aria-hidden
            />

            <h3 className="font-display text-lg font-semibold text-ink-900">
              Reach me directly
            </h3>
            <p className="mt-1 text-sm text-ink-500">
              Replies usually within 24 hours.
            </p>

            <ul className="mt-6 space-y-3">
              <ContactRow
                icon={<EmailRoundedIcon fontSize="small" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<CallRoundedIcon fontSize="small" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              />
              <ContactRow
                icon={<LocationOnRoundedIcon fontSize="small" />}
                label="Location"
                value={profile.location}
              />
              <ContactRow
                icon={<LinkedInIcon fontSize="small" />}
                label="LinkedIn"
                value="muhammad-areeb-1a34b0215"
                href={profile.linkedin}
                external
              />
            </ul>

            <a
              href={`mailto:${profile.email}?subject=Hi%20Areeb%20%E2%80%93%20Frontend%20opportunity`}
              className="btn-primary mt-7 w-full sm:w-auto"
            >
              <EmailRoundedIcon fontSize="small" />
              Send an Email
            </a>
          </div>

          {/* Map */}
          <div className="card relative overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-ink-100 px-5 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Based in
                </p>
                <h3 className="font-display text-base font-semibold text-ink-900">
                  {profile.location}
                </h3>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                Leaflet · OSM
              </span>
            </div>
            <div className="h-[360px] w-full">
              <MapContainer
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={center} icon={brandIcon}>
                  <Popup>
                    <strong>Muhammad Areeb Zahid</strong>
                    <br />
                    Senior Frontend Developer
                    <br />
                    Karachi, Pakistan
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group flex items-center justify-between gap-4 rounded-xl border border-ink-100 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-400">
            {label}
          </p>
          <p className="truncate text-sm font-medium text-ink-800">{value}</p>
        </div>
      </div>
      {href && (
        <ArrowOutwardRoundedIcon
          className="text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
          style={{ fontSize: 18 }}
        />
      )}
    </div>
  );

  if (!href) return <li>{content}</li>;
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    </li>
  );
}
