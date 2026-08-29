import { certifications, books } from "@/data/profile";
import SectionHeader from "../SectionHeader";

export default function Credentials() {
  return (
    <section id="credentials" className="shell section-pad cv-auto">
      <SectionHeader index="02" title="Certifications & Books" />

      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        <div>
          <p className="label mb-3 text-primary">Certifications</p>
          <ul className="border-t border-line">
            {certifications.map((c) => {
              const body = (
                <>
                  <p className="flex items-center gap-1.5 text-fluid-base text-fg">
                    {c.name}
                    {c.href && (
                      <span
                        aria-hidden
                        className="text-muted transition-colors group-hover:text-primary"
                      >
                        ↗
                      </span>
                    )}
                  </p>
                  <p className="label mt-1 normal-case tracking-normal">
                    {c.issuer}
                    {c.note ? ` · ${c.note}` : ""}
                  </p>
                </>
              );
              return (
                <li key={c.name} className="border-b border-line">
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bracket group block px-3 py-4 transition-colors hover:bg-surface"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="px-3 py-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="label mb-3 text-primary">Books</p>
          <ul className="border-t border-line">
            {books.map((b) => (
              <li key={b.short} className="border-b border-line px-3 py-4">
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-fluid-base">
                    <span className="text-primary">{b.short}</span>
                    <span className="text-muted"> — {b.title}</span>
                  </span>
                  <span className="label whitespace-nowrap">{b.status}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
