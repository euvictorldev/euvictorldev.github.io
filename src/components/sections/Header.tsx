const nav = [
  { label: "Research", href: "#research" },
  { label: "Certs", href: "#credentials" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between gap-4">
        <a href="#top" className="heading text-fluid-base">
          pixo<span className="text-primary caret">_</span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="label transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <span className="flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 bg-ok pulse-square" />
          <span className="label hidden sm:inline">available</span>
        </span>
      </div>
    </header>
  );
}
