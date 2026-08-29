import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

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
    <section id="top" className="shell relative flex min-h-[82vh] flex-col justify-center py-20">
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

        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.badges.map((b) => {
            const cls =
              "inline-block border border-primary/70 px-3 py-1.5 text-fluid-xs uppercase tracking-[0.16em] text-primary transition-colors";
            return (
              <li key={b.label}>
                {b.href ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} hover:bg-primary hover:text-bg`}
                  >
                    {b.label} ↗
                  </a>
                ) : (
                  <span className={cls}>{b.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href="#exploits"
        className="label mt-16 inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
      >
        <span aria-hidden>↓</span> scroll
      </a>
    </section>
  );
}
