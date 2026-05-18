import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  CheckCircle2,
  Zap,
  Target,
  Shield,
  Eye,
  Clock,
  Sparkles,
  Star,
  ChevronRight,
  Palette,
  ShieldCheck,
  Cpu,
  Download,
  WifiOff,
  Lock,
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
    id: "app-start",
    name: "O App Start",
    idealFor: "Se você tem uma ideia nova e quer testar rápido no mercado sem gastar muito dinheiro.",
    priceFrom: "R$ 3.500",
    priceLabel: "A partir de",
    timeframe: "2 a 4 semanas",
    highlighted: false,
    keyFeatures: [
      "Funcional em Android e iPhone",
      "Ferramentas básicas (Até 5 telas)",
      "Focado no problema principal",
      "Design limpo e intuitivo",
    ],
    fullFeatures: [
      "Base sólida para validação (MVP)",
      "Navegação fluida entre telas",
      "Integração básica de formulários",
      "Pronto para coletar feedback real",
      "Hospedagem inicial configurada",
    ],
    structure: [
      "Definição da jornada do usuário",
      "Desenvolvimento do núcleo (Core)",
      "Testes de usabilidade básica",
      "Entrega para teste de mercado",
    ],
  },
  {
    id: "app-pro",
    name: "O App Pro",
    idealFor: "Se você já sabe o que quer e precisa de um aplicativo mais forte para o dia a dia da sua empresa.",
    priceFrom: "R$ 8.900",
    priceLabel: "A partir de",
    timeframe: "4 a 7 semanas",
    highlighted: true,
    badge: "Mais Vendido",
    keyFeatures: [
      "Banco de dados robusto",
      "Notificações Push",
      "Painel de Controle completo",
      "Mais telas e fluxos complexos",
    ],
    fullFeatures: [
      "Sincronização de dados em tempo real",
      "Sistema de autenticação (Login)",
      "Painel web para gestão de conteúdo",
      "Relatórios de uso e métricas",
      "Otimização de consumo de bateria",
      "Arquitetura escalável para crescimento",
    ],
    structure: [
      "Modelagem de dados complexa",
      "Desenvolvimento de API e Painel",
      "Configuração de Push Notifications",
      "Testes de carga e estresse",
    ],
  },
  {
    id: "app-master",
    name: "O App Master",
    idealFor: "Para quem precisa de tecnologia avançada, pagamentos e design de luxo para muitos usuários.",
    priceFrom: "R$ 18.000",
    priceLabel: "A partir de",
    timeframe: "8 a 12 semanas",
    highlighted: false,
    keyFeatures: [
      "Design de luxo e exclusivo",
      "Integração com Pagamentos/Mapas",
      "Inteligência Artificial nativa",
      "Suporte para escala massiva",
    ],
    fullFeatures: [
      "Micro-interações premium",
      "Gateway de pagamento (Stripe/MP)",
      "Geolocalização e mapas avançados",
      "Processamento via IA (GPT/Claude)",
      "Segurança bancária de dados",
      "Redundância global de servidores",
    ],
    structure: [
      "UI/UX Design de alta fidelidade",
      "Integrações de terceiros (APIs)",
      "Implementação de IA e Algoritmos",
      "Otimização extrema de performance",
    ],
  },
];

const addons = [
  { name: "Publicação nas Lojas", price: "+R$ 800", icon: Download },
  { name: "Modo Offline", price: "+R$ 1.500", icon: WifiOff },
  { name: "Sua Marca Bonita (Logo)", price: "+R$ 450", icon: Palette },
  { name: "IA no seu Aplicativo", price: "A partir de R$ 2.000", icon: Cpu },
];

const trustPoints = [
  { icon: Target, title: "Design para Pessoas", desc: "Desenho pensando em quem vai usar de verdade." },
  { icon: Zap, title: "Código Rápido", desc: "Aplicativo leve que não 'pesa' no celular." },
  { icon: Eye, title: "Entrega por Etapas", desc: "Você testa e aprova enquanto eu construo." },
  { icon: Shield, title: "Testes Reais", desc: "Testado em vários modelos de celular." },
];

const techStack = [
  "React Native", "Flutter", "Expo", "OpenAI API",
  "Claude", "LiteLLM", "Supabase", "PostgreSQL",
  "Firebase", "MongoDB", "Figma", "Framer",
  "Photoshop", "Docker", "VPS Linux", "Cloudflare",
];

const requirementsFAQ = [
  {
    id: "req-1",
    title: "Fase 1: O Plano",
    items: [
      "Descrição simples do problema que o app resolve",
      "O que a pessoa precisa conseguir fazer dentro dele",
      "Lista de funcionalidades 'indispensáveis'",
    ],
  },
  {
    id: "req-2",
    title: "Fase 2: O Público",
    items: [
      "Quem são os usuários? (Clientes, funcionários, etc)",
      "Em quais situações eles usarão o app?",
      "Preferência de sistema (Foco em iOS, Android ou ambos)",
    ],
  },
  {
    id: "req-3",
    title: "Fase 3: Contas Oficiais",
    items: [
      "Conta de Desenvolvedor Apple (US$ 99/ano)",
      "Conta de Desenvolvedor Google (US$ 25 única)",
      "Taxas pagas diretamente às lojas para manter o app no ar",
    ],
  },
];

/* ─── Component ─── */
export default function SeuAppExclusivo() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── Back Button ── */}
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
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mx-auto">
            <Smartphone className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 font-display text-fluid-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
            Seu App <em className="not-italic text-primary">Exclusivo</em>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            "Transforme sua ideia em um aplicativo real que funciona direto no celular dos seus clientes (Android e iPhone)."
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* ── Monthly Plan ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/15 overflow-hidden border-primary/20">
            <CardContent className="p-8 md:flex md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">🛡️ O seu Seguro Digital</h3>
                    <p className="text-xs text-muted-foreground">Eu garanto que seu aplicativo continue funcionando mesmo quando o Google ou a Apple mudarem as regras.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { icon: Eye, label: "Vigilância 24h" },
                    { icon: Sparkles, label: "Atualizações Técnicas" },
                    { icon: Lock, label: "Cópia de Segurança" },
                    { icon: Clock, label: "Ajustes Rápidos (2h/mês)" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Monitoramento de servidor, ajustes para novas versões de OS e pequenas alterações mensais inclusas.
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right flex-shrink-0">
                <div className="text-3xl font-bold">
                  R$ 229,90<span className="text-base font-normal text-muted-foreground">/mês</span>
                </div>
                <WhatsAppCTA
                  source="servico-app-seguro-digital"
                  size="sm"
                  message="Olá Victor! Quero saber mais sobre o Seguro Digital para o meu aplicativo."
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
            Coisas <em className="not-italic text-primary">Extras</em> que Você Pode Adicionar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto opacity-30" />

      {/* ── Trust Bar ── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-fluid-3xl mb-8 text-center">
            Por que me <em className="not-italic text-primary">escolher?</em>
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
            Requisitos do <em className="not-italic text-primary">Projeto</em>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">O que eu preciso de você para darmos vida ao seu app.</p>

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
            Tecnologias que Utilizamos
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
            Pronto para ter seu <em className="not-italic text-primary">app exclusivo?</em>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Transforme sua ideia em realidade e leve seu negócio para o bolso de todos os seus clientes.
          </p>
          <WhatsAppCTA
            source="servico-app-final"
            size="lg"
            message="Olá Victor! Tenho uma ideia de aplicativo e gostaria de conversar sobre o desenvolvimento exclusivo."
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
        <div className="my-4">
          <span className="text-xs text-muted-foreground">{plan.priceLabel}</span>
          <div className="text-3xl font-bold mt-0.5">{plan.priceFrom}</div>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {plan.timeframe}
          </div>
        </div>

        <Separator className="opacity-20 mb-4" />

        <div className="space-y-2.5 flex-1">
          {plan.keyFeatures.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{f}</span>
            </div>
          ))}
        </div>

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
              Como construímos
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

        <div className="mt-5">
          <WhatsAppCTA
            source={`servico-app-${plan.id}`}
            size="sm"
            message={`Olá Victor! Tenho interesse no plano ${plan.name} para o meu aplicativo exclusivo.`}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
