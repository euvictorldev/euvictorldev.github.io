import { links } from "@/data/profile";
import SectionHeader from "../SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="shell section-pad cv-auto">
      <SectionHeader index="05" title="Contact" />

      <ul className="grid border-t border-line sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.label} className="border-b border-line sm:odd:border-r sm:odd:pr-px">
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bracket group flex items-center justify-between px-3 py-4 transition-colors hover:bg-surface"
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
    </section>
  );
}
