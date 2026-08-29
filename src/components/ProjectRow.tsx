import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";
import { cn } from "@/lib/utils";

export default function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${project.id}`;

  return (
    <div
      className={cn(
        "bracket border-b border-line transition-colors",
        open ? "bg-surface" : "hover:bg-surface/60",
      )}
      data-open={open}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-4 px-3 py-4 text-left sm:px-5"
      >
        <span
          aria-hidden
          className={cn(
            "text-fluid-sm transition-colors",
            open ? "text-primary" : "text-muted",
          )}
        >
          {open ? "-" : "+"}
        </span>

        <span className="min-w-0">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="heading text-fluid-base text-fg">{project.name}</span>
            {project.security && (
              <span className="border border-primary px-1.5 py-px text-fluid-xs uppercase tracking-[0.14em] text-primary">
                security
              </span>
            )}
            <span className="label normal-case tracking-normal">{project.role}</span>
          </span>
          <span className="mt-1 block truncate text-fluid-sm text-muted">
            {project.summary}
          </span>
        </span>

        <span className="label whitespace-nowrap">{project.period}</span>
      </button>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 px-3 pb-8 sm:px-5 md:grid-cols-[1fr_minmax(0,340px)]">
            <div>
              <ul className="space-y-2">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-fluid-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <li
                    key={t}
                    className="border border-line px-2 py-1 text-fluid-xs uppercase tracking-[0.12em] text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {project.media && open && (
              <ProjectMedia media={project.media} name={project.name} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
