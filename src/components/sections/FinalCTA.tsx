import { CTAGroup } from "../CTAButtons";
import ScrollReveal from "../ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <ScrollReveal className="container-narrow relative text-center">
        <div className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-foreground/90">
          <span className="pulse-dot" />
          Disponível para novos projetos
        </div>

        <h2 className="mt-8 font-display text-fluid-5xl leading-[1] tracking-[-0.02em] text-balance max-w-4xl mx-auto">
          Pronto para tirar sua{" "}
          <em className="not-italic text-primary">ideia do papel</em>?
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-fluid-base leading-relaxed">
          Me chama para conversarmos. Eu te ajudo a escolher o melhor caminho para o seu projeto, com foco no que traz resultado rápido para você.
        </p>

        <div className="mt-12">
          <CTAGroup source="cta-final" size="lg" />
        </div>
      </ScrollReveal>
    </section>
  );
}
