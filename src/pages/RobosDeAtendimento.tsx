import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
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
  Palette,
  Lock,
  MessageCircle,
  Layout,
  ShieldCheck,
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
    id: "robo-porteiro",
    name: "O Robô Porteiro",
    idealFor: "Se você recebe muitas mensagens parecidas e quer organizar a entrada da sua loja digital rapidinho.",
    priceFrom: "R$ 300",
    priceLabel: "A partir de",
    timeframe: "2 a 4 dias úteis",
    highlighted: false,
    keyFeatures: [
      "Olá educado + Botões de menu",
      "Respostas para perguntas frequentes",
      "Alerta no celular para humanos",
      "Proteção contra banimentos",
    ],
    fullFeatures: [
      "Integração direta com WhatsApp",
      "Configuração de menu interativo",
      "Base de conhecimento inicial",
      "Alerta via Webhook (Celular)",
      "Segurança: Proteção Aprimorada",
    ],
    structure: [
      "Fluxo de boas-vindas",
      "Menu de opções (1, 2, 3...)",
      "Lógica de transbordo humano",
      "Encerramento automático",
    ],
  },
  {
    id: "robo-organizador",
    name: "O Robô Organizador",
    idealFor: "Para você que quer profissionalizar suas vendas e ter o controle total de quem te chama.",
    priceFrom: "R$ 1.600",
    priceLabel: "A partir de",
    timeframe: "6 a 9 dias úteis",
    highlighted: true,
    badge: "Mais Vendido",
    keyFeatures: [
      "Filtro de Nome, E-mail e Interesse",
      "Painel de Gestão (Dashboard)",
      "Limpeza automática de chat",
      "Estatísticas e Exportação",
    ],
    fullFeatures: [
      "Secretário digital que filtra leads",
      "Notificação via Discord/Telegram/Webhooks",
      "Painel web para monitoramento em tempo real",
      "Gráficos de novos clientes e horários de pico",
      "Exportação para Google Planilhas ou CSV",
      "Proteção Aprimorada contra banimentos",
    ],
    structure: [
      "Fluxo de triagem e coleta de dados",
      "Integração com CRM/Planilha",
      "Dashboard de atendimentos pendentes",
      "Sistema de notificações inteligentes",
    ],
  },
  {
    id: "super-robo",
    name: "O Super Robô (IA)",
    idealFor: "Se você quer que o robô converse de verdade, tire dúvidas difíceis e pareça uma pessoa real.",
    priceFrom: "R$ 3.200",
    priceLabel: "A partir de",
    timeframe: "12 a 18 dias úteis",
    highlighted: false,
    keyFeatures: [
      "IA com conversa natural",
      "Cérebro de Reserva (LiteLLM)",
      "Lê manuais e responde dúvidas",
      "Encaminhamento inteligente",
    ],
    fullFeatures: [
      "Treinamento com documentos/PDFs da empresa",
      "Processamento de Linguagem Natural (LLM)",
      "Failover automático de cérebro (Redundância)",
      "Encaminhamento para Vendas/Suporte/Setores",
      "Análise de sentimento e intenção",
      "Proteção máxima contra banimentos",
    ],
    structure: [
      "Cérebro central (GPT/Claude/LiteLLM)",
      "Roteamento inteligente de intenções",
      "Integração com manuais internos",
      "Fallback para transbordo humano rápido",
    ],
  },
];

const addons = [
  { name: "Robô em Todo Lugar (Omnichannel)", price: "+R$ 700", icon: MessageCircle },
  { name: "Sua Marca Bonita (Design)", price: "+R$ 450", icon: Palette },
  { name: "API Oficial (Meta Business)", price: "+R$ 600", icon: ShieldCheck },
  { name: "Dashboard Customizado", price: "Sob consulta", icon: Layout },
];

const trustPoints = [
  { icon: Target, title: "Foco no seu Lucro", desc: "Eu não vendo código, entrego faturamento." },
  { icon: Zap, title: "Entrega Rápida", desc: "Uso tecnologias de elite para semanas, não meses." },
  { icon: Shield, title: "Resolução Analítica", desc: "Estabilidade técnica e rotas de segurança." },
  { icon: Eye, title: "Você é o Dono", desc: "Dados e contas são seus. Transparência total." },
];

const techStack = [
  "n8n", "Typebot", "OpenAI", "Claude",
  "LiteLLM", "Cloudflare", "VPS Linux",
  "Discord Webhooks", "Telegram API", "Chatwoot",
  "Evolution API", "HubSpot", "Pipedrive",
];

const requirementsFAQ = [
  {
    id: "req-1",
    title: "Dados e Acessos Iniciais",
    items: [
      "Descrição detalhada do fluxo de atendimento",
      "Perguntas mais frequentes (FAQ) dos clientes",
      "Acesso ao WhatsApp Business ou conta Discord",
    ],
  },
  {
    id: "req-2",
    title: "Documentação para IA (Plano Super Robô)",
    items: [
      "Manuais de produto, tabelas de preços ou guias de suporte",
      "Exemplos de como você gostaria que o robô respondesse",
      "Lista de contatos para transbordo humano",
    ],
  },
  {
    id: "req-3",
    title: "Integrações Externas",
    items: [
      "Acesso às APIs do seu CRM (HubSpot, Pipedrive, etc)",
      "Webhook do Discord ou Telegram para notificações",
      "Dados da sua VPS ou conta Cloud (posso ajudar a criar)",
    ],
  },
];

/* ─── Component ─── */
export default function RobosDeAtendimento() {
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
            <Bot className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 font-display text-fluid-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
            Robôs de <em className="not-italic text-primary">Atendimento</em>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            "Imagine ter um funcionário que nunca dorme, nunca reclama e atende todos os seus clientes em segundos no WhatsApp, Instagram ou Telegram."
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
                    <p className="text-xs text-muted-foreground">Eu cuido da tecnologia para você focar apenas em vender e crescer.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { icon: Eye, label: "Vigilância 24h" },
                    { icon: Lock, label: "Cópia de Segurança" },
                    { icon: Server, label: "Hospedagem Inclusa" },
                    { icon: Clock, label: "Sempre Atualizado (2h/mês)" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Monitoramento constante, consertos preventivos e suporte para trocas de textos e preços.
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right flex-shrink-0">
                <div className="text-3xl font-bold">
                  R$ 229,90<span className="text-base font-normal text-muted-foreground">/mês</span>
                </div>
                <WhatsAppCTA
                  source="servico-robos-seguro-digital"
                  size="sm"
                  message="Olá Victor! Quero saber mais sobre o Seguro Digital para o meu robô."
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
            O que eu preciso de <em className="not-italic text-primary">você</em>
          </h2>
          <p className="text-muted-foreground text-sm mb-6">Para darmos vida ao seu atendimento automatizado.</p>

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
            Pronto para ter um <em className="not-italic text-primary">atendimento 24h?</em>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Automatize seus processos e foque no que realmente importa: escalar seu negócio.
          </p>
          <WhatsAppCTA
            source="servico-robos-final"
            size="lg"
            message="Olá Victor! Quero um robô de atendimento para o meu negócio. Vim da página de serviços."
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
          <div className="text-3xl font-bold mt-0.5">{plan.priceFrom}</div>
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
              Lógica de operação
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
            source={`servico-robos-${plan.id}`}
            size="sm"
            message={`Olá Victor! Tenho interesse no plano ${plan.name}. Vim da página de serviços.`}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
