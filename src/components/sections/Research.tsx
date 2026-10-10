import { useState } from "react";
import { findings, type Severity } from "@/data/exploits";
import SectionHeader from "../SectionHeader";
import SeverityChip from "../SeverityChip";
import ScrollReveal from "../ScrollReveal";

const resolutionTone: Record<string, string> = {
  Accepted: "text-ok",
  Resolved: "text-ok",
  Unresolved: "text-primary",
};

function severityOrder(s: Severity): number {
  return { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }[s];
}

export default function Research() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="research" className="shell section-pad cv-auto">
      <SectionHeader index="01" title="Security Research" note="responsible disclosure" />

      <ul className="border-t border-line mt-8">
        {findings.map((f, idx) => {
          const isOpen = open === f.target;
          const sorted = [...f.details].sort(
            (a, b) => severityOrder(a.severity) - severityOrder(b.severity)
          );
          const chips = sorted.reduce<{ label: string; level: Severity }[]>((acc, d) => {
            const count = sorted.filter((x) => x.severity === d.severity).length;
            const label = count > 1 ? `${count}x ${d.severity[0] + d.severity.slice(1).toLowerCase()}` : d.severity[0] + d.severity.slice(1).toLowerCase();
            if (!acc.find((c) => c.level === d.severity)) acc.push({ label, level: d.severity });
            return acc;
          }, []);

          return (
            <li key={f.target} className="border-b border-line">
              <ScrollReveal>
                <button
                  onClick={() => setOpen(isOpen ? null : f.target)}
                  className="bracket group flex w-full items-center justify-between gap-4 px-3 py-4 text-left transition-colors hover:bg-surface"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="label text-muted shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="heading text-fluid-base truncate">{f.target}</span>
                    {f.platform && (
                      <span className="label hidden text-muted sm:inline">via {f.platform}</span>
                    )}
                    {f.href && (
                      <a
                        href={f.href}
                        onClick={(e) => e.stopPropagation()}
                        className="label hidden text-primary transition-colors hover:text-primary-hot sm:inline"
                      >
                        {f.hrefLabel} ↗
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <ul className="flex flex-wrap justify-end gap-1.5">
                      {chips.map((c) => (
                        <li key={c.level}>
                          <SeverityChip label={c.label} level={c.level} />
                        </li>
                      ))}
                    </ul>
                    <span
                      aria-hidden
                      className="label text-primary border border-line px-1.5 py-0.5 transition-colors group-hover:border-primary"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-line bg-surface px-3 py-5">
                    <ul className="flex flex-col gap-3">
                      {sorted.map((d, di) => (
                        <li key={di} className="flex items-center gap-3">
                          <SeverityChip
                            label={d.severity[0] + d.severity.slice(1).toLowerCase()}
                            level={d.severity}
                          />
                          <span className="text-fluid-base text-fg flex-1">{d.label}</span>
                          <span className={`label shrink-0 ${resolutionTone[d.resolution] ?? "text-muted"}`}>
                            {d.resolution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </ScrollReveal>
            </li>
          );
        })}
      </ul>

      <p className="label mt-5">
        {"// "}all findings reported through responsible disclosure. no details published without authorization.
      </p>
    </section>
  );
}
