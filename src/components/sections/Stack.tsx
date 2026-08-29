import { stack } from "@/data/profile";
import SectionHeader from "../SectionHeader";

export default function Stack() {
  return (
    <section id="stack" className="shell section-pad cv-auto">
      <SectionHeader index="03" title="Stack" />

      <dl className="border-t border-line">
        {stack.map((group) => (
          <div
            key={group.group}
            className="grid gap-3 border-b border-line py-5 md:grid-cols-[140px_1fr] md:gap-6"
          >
            <dt className="label pt-1 text-primary">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2.5 py-1 text-fluid-sm text-muted transition-colors hover:border-primary hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
