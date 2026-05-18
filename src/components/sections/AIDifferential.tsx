import { Sparkles, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "../ScrollReveal";

const benefits = [
  { 
    icon: Zap, 
    title: "Entrega ágil e focada", 
    desc: "Desenvolvimento planejado para colocar sua ideia no ar com velocidade e qualidade técnica." 
  },
  { 
    icon: Sparkles, 
    title: "Eficiência de custo", 
    desc: "Uso de ferramentas modernas para otimizar o tempo e entregar mais valor por cada hora investida." 
  },
  { 
    icon: ShieldCheck, 
    title: "Segurança e Qualidade", 
    desc: "Testes rigorosos e código limpo para garantir que seu sistema seja estável e confiável." 
  },
];

export default function AIDifferential() {
  return (
    <section className="pt-24 pb-40 md:pt-32 md:pb-56 relative overflow-hidden bg-[hsl(var(--bg-emerald-deep))]">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div className="container-narrow relative">
        <ScrollReveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Por que me escolher</span>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight">
            Tecnologia de ponta para você <em className="not-italic text-primary">ter resultados reais.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-fluid-base leading-relaxed">
            Utilizo as ferramentas mais modernas do mercado para construir soluções que resolvem seus problemas. 
            Foco em agilidade, sem abrir mão da segurança e da escalabilidade do seu negócio.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }, idx) => (
            <ScrollReveal 
              key={title}
              animation="animate-fade-rise"
              delay={
                idx === 0 ? "" : 
                idx === 1 ? "[animation-delay:150ms]" : 
                "[animation-delay:300ms]"
              }
            >
              <div className="liquid-glass rounded-3xl p-8 border border-primary/10 h-full">
                <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-fluid-2xl tracking-tight">{title}</h3>
                <p className="mt-3 text-fluid-base text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
