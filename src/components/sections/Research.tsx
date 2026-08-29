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

      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {findings.map((f) => (
          <li key={f.target} className="bg-bg">
            <ScrollReveal>
              <article className="bracket flex h-full flex-col gap-3 p-5 transition-colors hover:bg-surface">
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
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <p className="label mt-5">
        {"// "}all findings reported through responsible disclosure. no details published.
      </p>
    </section>
  );
}
