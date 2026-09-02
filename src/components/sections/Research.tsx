import { findings, type Status } from "@/data/exploits";
import SectionHeader from "../SectionHeader";
import SeverityChip from "../SeverityChip";
import ScrollReveal from "../ScrollReveal";

const statusTone: Record<Status, string> = {
  Accepted: "text-ok",
  Resolved: "text-ok",
  Reported: "text-primary",
  Informational: "text-info",
};

export default function Research() {
  return (
    <section id="research" className="shell section-pad cv-auto">
      <SectionHeader index="01" title="Security Research" note="responsible disclosure" />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {findings.map((f) => {
          const card = (
            <article className="bracket flex h-full flex-col gap-3 border border-line bg-bg p-5 transition-colors group-hover:bg-surface">
              <div className="flex items-center justify-between gap-3">
                <h3 className="heading text-fluid-lg">{f.target}</h3>
                <span className={`label ${statusTone[f.status]}`}>{f.status}</span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {f.findings.map((s) => (
                  <li key={s.label}>
                    <SeverityChip label={s.label} level={s.level} />
                  </li>
                ))}
              </ul>

              {f.href && (
                <p className="label mt-auto flex items-center gap-1.5 pt-2 text-primary">
                  {f.hrefLabel}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </p>
              )}
            </article>
          );

          return (
            <li key={f.target}>
              <ScrollReveal className="h-full">
                {f.href ? (
                  <a
                    href={f.href}
                    className="group block h-full"
                    aria-label={`${f.target} — ${f.hrefLabel}`}
                  >
                    {card}
                  </a>
                ) : (
                  <div className="group h-full">{card}</div>
                )}
              </ScrollReveal>
            </li>
          );
        })}
      </ul>

      <p className="label mt-5">
        {"// "}all findings reported through responsible disclosure. no details published.
      </p>
    </section>
  );
}
