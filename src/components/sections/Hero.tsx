import { useEffect, useState } from "react";
import { profile, links } from "@/data/profile";

const PROMPT = "pixo@root:~$ whoami";

function useTypewriter(text: string, speed = 55) {
  const [out, setOut] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);

  return out;
}

export default function Hero() {
  const typed = useTypewriter(PROMPT);
  const done = typed.length === PROMPT.length;

  return (
    <section id="top" className="shell relative flex min-h-[66vh] flex-col justify-center py-16">
      <div className="max-w-3xl">
        <p className="text-fluid-sm text-muted" aria-label={PROMPT}>
          <span aria-hidden>{typed}</span>
          <span aria-hidden className="caret text-primary">
            █
          </span>
        </p>

        <h1 className="heading mt-6 text-fluid-5xl">
          {profile.handle}
          <span className="text-primary">.</span>
        </h1>

        <p
          className="mt-4 text-fluid-lg text-fg transition-opacity duration-500"
          style={{ opacity: done ? 1 : 0 }}
        >
          {profile.name} — {profile.title}
        </p>

        <p className="mt-4 max-w-xl text-fluid-sm leading-relaxed text-muted">
          {profile.bio}
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-fluid-sm uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
              >
                {l.label}
                <span
                  aria-hidden
                  className="inline-block text-primary/60 transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#research"
        className="label mt-10 inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
      >
        <span aria-hidden>↓</span> scroll
      </a>
    </section>
  );
}
