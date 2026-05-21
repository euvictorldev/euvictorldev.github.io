import { useEffect, useRef } from "react";
import { CTAGroup } from "../CTAButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkVisibilityAndModal = () => {
      if (videoRef.current) {
        const isModalOpen = document.body.classList.contains("modal-open");
        const isVisible = videoRef.current.getBoundingClientRect().bottom > 0;

        if (isVisible && !isModalOpen) {
          videoRef.current.play().catch(() => { });
        } else {
          videoRef.current.pause();
        }
      }
    };

    const observer = new MutationObserver(checkVisibilityAndModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("scroll", checkVisibilityAndModal, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibilityAndModal);
    };
  }, []);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <header
      className="relative min-h-[100dvh] w-full overflow-hidden bg-background"
      style={{
        backgroundImage: `url('${base}/images/hero-background-static.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={`${base}/images/hero-background-static.png`}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark + emerald gradient overlay for legibility & brand */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div
        className="absolute inset-0 z-[1] opacity-30"
        style={{ background: "var(--gradient-radial-glow)" }}
      />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 py-5">
        <a href="#" className="group font-display text-fluid-2xl tracking-tight text-foreground transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
          @euvictorl<span className="text-primary group-hover:animate-pulse">dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          variant="outline"
          asChild
          className="liquid-glass hidden sm:inline-flex rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
        >
          <a href="#contato">Falar comigo</a>
        </Button>
      </nav>

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-32 md:pt-20 md:pb-40 text-center">
        <Badge
          variant="outline"
          className="liquid-glass mb-8 gap-2.5 px-4 py-1.5 text-xs sm:text-sm font-medium border-white/20 bg-white/5 text-white/90 animate-fade-rise hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="pulse-dot" />
          Disponível para novos projetos
        </Badge>

        <h1
          className="animate-fade-rise-delay font-display text-balance text-fluid-6xl leading-[0.98] tracking-[-0.03em] max-w-5xl text-foreground"
        >
          Eu transformo suas{" "}
          <em className="not-italic text-primary">ideias</em> em ferramentas que{" "}
          <em className="not-italic text-muted-foreground">trabalham por você.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-fluid-base leading-relaxed text-muted-foreground text-balance">
          Crio seu site, seus robôs de atendimento e seus aplicativos para facilitar sua vida.
          Você ganha tempo e eu cuido de toda a tecnologia de um jeito simples.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12">
          <CTAGroup source="hero" size="lg" />
        </div>

        <p className="animate-fade-rise-delay-3 mt-8 text-xs text-muted-foreground/70">
          Resposta em poucas horas · Orçamento sem compromisso
        </p>
      </section>
    </header>
  );
}
