import { links, reading } from "@/data/profile";
import SectionHeader from "../SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="shell section-pad cv-auto">
      <SectionHeader index="04" title="Contact" />

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <ul className="border-t border-line">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bracket group flex items-center justify-between border-b border-line px-3 py-4 transition-colors hover:bg-surface"
                >
                  <span className="heading text-fluid-base">{l.label}</span>
                  <span
                    aria-hidden
                    className="text-muted transition-colors group-hover:text-primary"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-4">Reading</p>
          <ul className="border-t border-line">
            {reading.map((r) => (
              <li
                key={r.short}
                className="flex items-baseline justify-between gap-4 border-b border-line px-3 py-4"
              >
                <span className="text-fluid-sm">
                  <span className="text-primary">{r.short}</span>
                  <span className="text-muted"> — {r.title}</span>
                </span>
                <span className="label whitespace-nowrap">{r.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
