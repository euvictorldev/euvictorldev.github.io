import { stack } from "@/data/profile";
import SectionHeader from "../SectionHeader";

export default function Stack() {
  return (
    <section id="stack" className="shell section-pad cv-auto">
      <SectionHeader index="04" title="Stack" />

      <dl className="border-t border-line">
        {stack.map((group) => (
          <div
            key={group.group}
            className="grid gap-1.5 border-b border-line py-2.5 md:grid-cols-[96px_1fr] md:items-center md:gap-4"
          >
            <dt className="label text-primary">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-2 py-0.5 text-fluid-xs text-muted transition-colors hover:border-primary hover:text-fg"
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
