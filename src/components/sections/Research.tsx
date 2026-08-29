import { findings, type Status } from "@/data/exploits";
import SectionHeader from "../SectionHeader";
import SeverityChip from "../SeverityChip";
import ScrollReveal from "../ScrollReveal";

const statusTone: Record<Status, string> = {
  Accepted: "text-ok",
  Resolved: "text-ok",
  Informational: "text-info",
};

export default function Research() {
  return (
    <section id="research" className="shell section-pad cv-auto">
      <SectionHeader index="01" title="Security Research" note="responsible disclosure" />

      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {findings.map((f) => (
          <li key={f.target} className="bg-bg">
            <ScrollReveal>
              <article className="bracket flex h-full flex-col gap-3 p-5 transition-colors hover:bg-surface">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="heading text-fluid-lg">{f.target}</h3>
                  {f.findings.map((s) => (
                    <SeverityChip key={s.label} label={s.label} level={s.level} />
                  ))}
                </div>

                <p className="text-fluid-sm leading-relaxed text-muted">{f.vector}</p>

                <p className="label mt-auto pt-1">
                  status: <span className={statusTone[f.status]}>{f.status}</span>
                </p>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <p className="label mt-5">
        {"// "}all findings reported through the vendor disclosure programme. no details published.
      </p>
    </section>
  );
}
