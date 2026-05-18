import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Target,
  Shield,
  Eye,
  Clock,
  Sparkles,
  Star,
  ChevronRight,
  Server,
  Lock,
  Mail,
  Bug,
  Globe,
  Bell,
  HardDrive,
  Activity,
  UserCheck,
  LifeBuoy,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { WhatsAppCTA } from "@/components/CTAButtons";
import { cn } from "@/lib/utils";

/* ─── Plan Data ─── */
interface Plan {
  id: string;
  name: string;
  idealFor: string;
  priceFrom: string;
  priceLabel: string;
  timeframe: string;
  highlighted: boolean;
  badge?: string;
  keyFeatures: string[];
  fullFeatures: string[];
  structure: string[];
}

const plans: Plan[] = [
  {
    id: "parceria-mensal",
    name: "Parceria Mensal",
    idealFor: "Ideal para quem tem site, landing page ou robôs e quer suporte total sem sustos.",
    priceFrom: "R$ 229,90",
    priceLabel: "Investimento",
    timeframe: "Atendimento em até 12h úteis",
    highlighted: true,
    badge: "Mecânico de Plantão",
    keyFeatures: [
      "Vigilância Proativa 24h",
      "Cópia de Segurança (Backup)",
      "Relatório de Saúde Mensal",
      "Crédito de 2 Horas Incluso",
    ],
    fullFeatures: [
      "Hospedagem inclusa (Plano Web)",
      "Gestão do servidor do robô (Plano Bot)",
      "Vigilância 24h contra quedas",
      "Backups semanais em nuvem",
      "Ajustes na IA e fluxo de mensagens",
      "Relatório mensal de performance",
    ],
    structure: [
      "Migração e Setup da Estrutura",
      "Ativação do Monitoramento 24h",
      "Configuração de Rotinas de Backup",
      "Início do Suporte Prioritário",
    ],
  },
];

const addons = [
  { name: "Hora Extra Suporte", price: "R$ 120/h", icon: Clock },
  { name: "Migração de Servidor", price: "R$ 300", icon: Server },
  { name: "Certificado SSL Extra", price: "R$ 150", icon: Lock },
];

const trustPoints = [
  { icon: Zap, title: "Economia Real", desc: "Evite taxas de suporte avulso que custam muito mais caro." },
  { icon: Star, title: "Prioridade Total", desc: "Quem assina passa na frente de todos em qualquer urgência." },
  { icon: Target, title: "Paz de Espírito", desc: "O trabalho chato é meu; o lucro e o sossego são seus." },
  { icon: UserCheck, title: "Resolução Rápida", desc: "Alertas no meu celular me avisam antes de você notar." },
];

const techStack = [
  "UptimeRobot", "WhatsApp Alerts", "Email Notifications",
  "Cloudflare", "Professional Hosting", "Cloud Backups",
  "Data Encryption", "AI Flow Management", "Node.js",
  "Python", "Docker Monitoring", "Server Management",
];

const requirementsFAQ = [
  {
    id: "req-1",
    title: "Acessos Necessários",
    items: [
      "Acesso ao painel do domínio (ex: Registro.br)",
      "Acesso às chaves digitais do sistema, site ou robô",
      "Acesso administrativo para monitoramento",
    ],
  },
];

/* ─── Component ─── */
export default function SempreComVoce() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── Back Button — sticky flush to top ── */}
      <div className="sticky top-0 z-50 px-6 py-3 backdrop-blur-md bg-background/70 border-b border-border/10">
        <Link
          to="/#servicos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Serviços
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="pt-12 pb-16 px-6 relative">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mx-auto">
            <LifeBuoy className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 font-display text-fluid-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
            Sempre com <em className="not-italic text-primary">Você</em>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            "Eu cuido da tecnologia nos bastidores para você focar apenas em vender e fazer sua empresa crescer."
          </p>
        </div>
      </section>

      {/* ── Intro Message ── */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Ter um site ou um robô é como ter um carro: ele precisa de revisão para não quebrar no meio da estrada. 
            Com esse plano, eu viro o <strong>"mecânico de plantão"</strong> da sua estrutura digital.
          </p>
        </div>
      </section>

      {/* ── Pricing Card ── */}
      <section className="px-6 pb-16">
        <div className="max-w-md mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* ── Special Benefit — The "Present" ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/15 overflow-hidden border-primary/20">
            <CardContent className="p-8 md:flex md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">🎁 Crédito de 2 Horas Mensais</h3>
                    <p className="text-xs text-muted-foreground">Um presente para pequenas mudanças sem custo extra.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { icon: Bell, label: "Vigilância 24h" },
                    { icon: HardDrive, label: "Cópia (Backup)" },
                    { icon: Activity, label: "Relatório Mensal" },
                    { icon: Sparkles, label: "Crédito 2 Horas" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Use seu crédito para trocar uma foto, mudar um preço ou escrever um texto novo. 
                  Eu conserto a maioria dos problemas antes mesmo de você notar.
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right flex-shrink-0">
                <div className="text-sm text-muted-foreground mb-1 italic">Vantagem inclusa</div>
                <div className="text-2xl font-bold text-primary">
                  Paz de Espírito
                </div>
                <WhatsAppCTA
                  source="servico-manutencao-paz-espirito"
                  size="sm"
                  message="Olá Victor! Quero saber mais sobre como funciona o crédito de 2 horas no plano Sempre com Você."
                  className="mt-4"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Addons ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-fluid-3xl mb-6">
            Serviços <em className="not-italic text-primary">Avulsos</em> (Para quem não assina)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {addons.map(({ name, price, icon: Icon }) => (
              <div
                key={name}
                className="rounded-2xl border border-border/50 bg-card/10 p-5 hover:border-primary/20 transition-colors"
              >
                <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="text-sm font-medium mb-1">{name}</h4>
                <span className="text-xs text-primary font-bold">{price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic">
            *Assinantes têm descontos exclusivos e prioridade nesses serviços.
          </p>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto opacity-30" />

      {/* ── Trust Bar ── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-fluid-3xl mb-8 text-center">
            Por que vale a <em className="not-italic text-primary">pena assinar?</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary mx-auto mb-3">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-fluid-3xl mb-2">
            O que eu preciso de <em className="not-italic text-primary">você</em>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">Para poder vigiar e cuidar da sua estrutura digital com excelência.</p>

          <Accordion type="multiple" className="w-full">
            {requirementsFAQ.map((req) => (
              <AccordionItem key={req.id} value={req.id} className="border-border/40">
                <AccordionTrigger className="text-sm font-medium hover:text-primary transition-colors">
                  {req.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-1">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
            Tecnologias de Monitoramento
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-4 py-1.5 rounded-full bg-muted/30 text-muted-foreground font-medium border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-fluid-4xl mb-4">
            Pare de se preocupar com <em className="not-italic text-primary">códigos e servidores.</em>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Deixe o trabalho técnico comigo e foque no que importa: o lucro do seu negócio.
          </p>
          <WhatsAppCTA
            source="servico-manutencao-final"
            size="lg"
            message="Olá Victor! Quero assinar o plano Sempre com Você para garantir que meu sistema nunca pare."
          />
        </div>
      </section>
    </main>
  );
}

/* ─── Plan Card Sub-Component ─── */
function PlanCard({ plan }: { readonly plan: Plan }) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500 flex flex-col",
        plan.highlighted
          ? "border-primary/40 bg-card/25 shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
          : "border-border/50 bg-card/15 hover:border-primary/20"
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 shadow-[0_0_16px_hsl(var(--primary)/0.4)]">
            <Star className="h-3 w-3 mr-1" />
            {plan.badge}
          </Badge>
        </div>
      )}

      <CardHeader className="pb-2 pt-6 px-6">
        <h3 className="font-display text-2xl">{plan.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{plan.idealFor}</p>
      </CardHeader>

      <CardContent className="px-6 pb-6 flex-1 flex flex-col">
        {/* Price */}
        <div className="my-4">
          <span className="text-xs text-muted-foreground">{plan.priceLabel}</span>
          <div className="text-3xl font-bold mt-0.5">{plan.priceFrom}<span className="text-base font-normal text-muted-foreground">/mês</span></div>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {plan.timeframe}
          </div>
        </div>

        <Separator className="opacity-20 mb-4" />

        {/* Key Features */}
        <div className="space-y-2.5 flex-1">
          {plan.keyFeatures.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{f}</span>
            </div>
          ))}
        </div>

        {/* Accordion for details */}
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="features" className="border-border/30">
            <AccordionTrigger className="text-xs text-primary font-bold py-2 hover:no-underline">
              Ver todos os recursos
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {plan.fullFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-primary/60 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="structure" className="border-border/30">
            <AccordionTrigger className="text-xs text-primary font-bold py-2 hover:no-underline">
              Processo de Cuidado
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {plan.structure.map((s, i) => (
                  <div key={s} className="flex items-start gap-2">
                    <span className="text-[10px] text-primary font-mono mt-0.5 w-3 text-right flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-xs text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA */}
        <div className="mt-5">
          <WhatsAppCTA
            source={`servico-manutencao-${plan.id}`}
            size="sm"
            message={`Olá Victor! Tenho interesse no ${plan.name} do serviço Sempre com Você.`}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
