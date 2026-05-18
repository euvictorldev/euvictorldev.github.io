export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-xl text-foreground">
          @victorl<span className="text-primary">-dev</span>
        </div>
        <p>© {new Date().getFullYear()} Victor. Construído com foco em conversão.</p>
        <div className="flex gap-5">
          <a
            href="https://wa.me/5591984248767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://discord.gg/AF3Hgvjxd5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
