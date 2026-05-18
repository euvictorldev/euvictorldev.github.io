import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "../ScrollReveal";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-[hsl(var(--bg-emerald-deep))] overflow-hidden">
      <div className="container-narrow">
        <ScrollReveal className="max-w-3xl">
          <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.25em] font-bold px-4 py-1">
            Quem sou eu
          </Badge>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight">
            Se você tem um desafio, eu <em className="not-italic text-primary">encontro a solução</em> técnica para ele.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-12 items-start">
          {/* Main bio */}
          <ScrollReveal className="lg:col-span-2 space-y-6 text-muted-foreground text-fluid-base leading-relaxed" delay="[animation-delay:150ms]">
            <p>
              Sou desenvolvedor focado em tirar o peso da tecnologia das suas costas. Aprendi criando ferramentas reais para pessoas que, como você, precisam de resultados e não de complicação.
            </p>
            <p>
              Tenho formação técnica e sou especialista em manter tudo seguro, garantindo que sua única preocupação seja o sucesso do seu negócio.
            </p>
            <p className="font-medium text-foreground/90 italic">
              "Minha filosofia é simples: a tecnologia deve trabalhar para você, e não o contrário."
            </p>
          </ScrollReveal>

          {/* Quick stats — 2x2 grid to stay compact */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Projetos entregues", delay: 300 },
              { value: "24/7", label: "Suporte ativo", delay: 400, pulse: true },
              { value: "100%", label: "Prazo garantido", delay: 500 },
              { value: "∞", label: "Foco total", delay: 600 },
            ].map((stat) => (
              <ScrollReveal
                key={stat.label}
                delay={`[animation-delay:${stat.delay}ms]`}
                className="h-full"
              >
                <Card
                  className="liquid-glass border-primary/10 bg-white/5 text-center h-full"
                >
                  <CardContent className="p-6 relative">
                    {stat.pulse && (
                      <span className="absolute top-3 right-3 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                    )}
                    <div className="font-display text-fluid-3xl text-primary leading-none">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-3 font-bold">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
