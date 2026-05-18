import { Globe, Bot, Smartphone, ShieldCheck, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "../ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Sites que Vendem",
    desc: "Páginas que atraem e convencem seus clientes.",
    slug: "sites-que-vendem",
  },
  {
    icon: Bot,
    title: "Robôs de Atendimento",
    desc: "Atendente automático 24h no WhatsApp ou Discord.",
    slug: "robos-de-atendimento",
  },
  {
    icon: Smartphone,
    title: "Seu App Exclusivo",
    desc: "Aplicativo fácil de usar para o seu negócio.",
    slug: "seu-app-exclusivo",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    desc: "Proteção completa para seus dados.",
    slug: "seguranca-total",
  },
  {
    icon: LifeBuoy,
    title: "Sempre com Você",
    desc: "Suporte contínuo para nada parar.",
    slug: "sempre-com-voce",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding relative">
      <div className="container-narrow">
        <ScrollReveal className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Como eu te ajudo</span>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight">
            Soluções para o seu negócio <br />
            <em className="not-italic text-primary">gerar lucro de verdade.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-fluid-base max-w-2xl leading-relaxed">
            Eu cuido de toda a tecnologia para você focar no que importa: crescer sua empresa.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {services.map(({ icon: Icon, title, desc, slug }, idx) => (
            <ScrollReveal 
              key={slug}
              delay={`[animation-delay:${idx * 100}ms]`}
              className="h-full"
            >
              <Link 
                to={`/servico/${slug}`}
                className="block h-full"
              >
                <Card className="group relative h-full border-border/50 bg-card/15 hover:border-primary/25 hover:bg-card/30 transition-all duration-400 overflow-hidden cursor-pointer">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-bold text-sm tracking-tight">{title}</h3>
                    <p className="mt-2 text-muted-foreground text-xs leading-relaxed flex-1">{desc}</p>
                    <div className="mt-4 pt-3 border-t border-border/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Ver detalhes →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
