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
    id: "cadeado-verde",
    name: "O Cadeado Verde",
    idealFor: "Para quem acabou de criar o site e quer que ele apareça como \"Seguro\" no Google para passar confiança.",
    priceFrom: "R$ 300",
    priceLabel: "Taxa única",
    timeframe: "24h a 48h",
    highlighted: false,
    keyFeatures: [
      "Instalação de Certificado SSL",
      "Configuração Cloudflare",
      "Proteção básica contra bots",
      "Cadeado de segurança ativo",
    ],
    fullFeatures: [
      "Certificado SSL (Cadeado Verde)",
      "Configuração de DNS via Cloudflare",
      "Proteção básica contra ataques de negação (DDoS)",
      "Redirecionamento automático HTTP para HTTPS",
      "Otimização inicial de carregamento",
    ],
    structure: [
      "Apontamento de DNS",
      "Ativação do SSL Universal",
      "Regras básicas de Firewall",
      "Validação de segurança no navegador",
    ],
  },
  {
    id: "blindagem-dados",
    name: "A Blindagem de Dados",
    idealFor: "Para quem guarda informações de clientes e não pode nem pensar em perder o site ou ser invadido.",
    priceFrom: "R$ 800",
    priceLabel: "Taxa única",
    timeframe: "3 a 5 dias",
    highlighted: true,
    badge: "Mais Procurado",
    keyFeatures: [
      "Tudo do plano básico",
      "Muros extras (Regras WAF)",
      "Backup Automático configurado",
      "Recuperação rápida do site",
    ],
    fullFeatures: [
      "Configuração de Regras de Firewall (WAF) personalizadas",
      "Sistema de Backup Automático (Nuvem/Off-site)",
      "Proteção de diretórios sensíveis",
      "Ocultação de versão do CMS/Servidor",
      "Bloqueio de países ou IPs suspeitos",
      "Recuperação de desastres em minutos",
    ],
    structure: [
      "Análise de vulnerabilidades superficiais",
      "Implementação de muros WAF",
      "Configuração de rotinas de backup",
      "Teste de restauração de dados",
    ],
  },
  {
    id: "alarme-invasao",
    name: "O Alarme de Invasão",
    idealFor: "Para empresas que não podem ficar fora do ar e querem ser avisadas de qualquer perigo real.",
    priceFrom: "R$ 1.400",
    priceLabel: "Taxa única",
    timeframe: "7 a 10 dias",
    highlighted: false,
    keyFeatures: [
      "Limpeza profunda de código",
      "Proteção avançada anti-hacker",
      "Alarme Inteligente por e-mail",
      "Vigilância Premium",
    ],
    fullFeatures: [
      "Auditoria completa de brechas no código",
      "Instalação de Alarme Inteligente (Notificação em tempo real)",
      "Monitoramento de integridade de arquivos",
      "Regras avançadas de contenção de ataques",
      "Remoção de backdoors e scripts maliciosos",
      "Suporte prioritário pós-instalação",
    ],
    structure: [
      "Limpeza profunda e remoção de brechas",
      "Instalação do sistema de alarme inteligente",
      "Configuração de alertas imediatos",
      "Endurecimento (Hardening) total do sistema",
    ],
  },
];

const addons = [
  { name: "E-mail Profissional", price: "+R$ 150", icon: Mail },
  { name: "Limpeza de Vírus", price: "+R$ 500", icon: Bug },
  { name: "Apontamento de Nome", price: "+R$ 100", icon: Globe },
  { name: "Configuração de CDN", price: "Incluso", icon: Zap },
];

const trustPoints = [
  { icon: Eye, title: "Transparência", desc: "Uso as melhores ferramentas e cobro pela configuração." },
  { icon: ShieldCheck, title: "Foco em Estabilidade", desc: "Durma tranquilo sabendo que cuidamos da sua porta." },
  { icon: UserCheck, title: "Você é o Dono", desc: "Todas as contas ficam no seu nome. A chave é sua." },
  { icon: Lock, title: "Segurança Real", desc: "Padrões de grandes empresas no seu negócio." },
];

const techStack = [
  "Cloudflare", "WAF Rules", "SSL/TLS", "BitNinja",
  "Wordfence", "Sucuri", "Linux Hardening",
  "Automated Backups", "S3 Storage", "DNS Management",
  "Vulnerability Scanning", "IP Filtering", "Bot Shield",
];

const requirementsFAQ = [
  {
    id: "req-1",
    title: "Acessos Necessários",
    items: [
      "Acesso ao painel do domínio (ex: Registro.br)",
      "Acesso ao painel da hospedagem ou servidor VPS",
      "Acesso administrativo ao site (WordPress, etc)",
    ],
  },
  {
    id: "req-2",
    title: "Informações do Sistema",
    items: [
      "Histórico de invasões ou ataques recentes",
      "Onde os dados dos clientes são armazenados",
      "Configurações atuais de backup (se existirem)",
    ],
  },
];

/* ─── Component ─── */
export default function SegurancaTotal() {
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
            <ShieldCheck className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 font-display text-fluid-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
            Segurança <em className="not-italic text-primary">Total</em>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            "Eu protejo o seu site com as mesmas ferramentas que as grandes empresas usam, mas de um jeito que cabe no seu bolso."
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
                    <p className="text-xs text-muted-foreground">Segurança não é algo que você faz uma vez e pronto. É preciso vigilância constante.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { icon: Bell, label: "Vigilância 24h" },
                    { icon: HardDrive, label: "Gestão de Backup" },
                    { icon: Activity, label: "Relatório de Saúde" },
                    { icon: Sparkles, label: "Ajustes Rápidos (2h)" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Eu sou avisado se o seu site balançar, verifico backups toda semana e te mando um relatório mensal de bloqueios e saúde.
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right flex-shrink-0">
                <div className="text-3xl font-bold">
                  R$ 159,90<span className="text-base font-normal text-muted-foreground">/mês</span>
                </div>
                <WhatsAppCTA
                  source="servico-seguranca-seguro-digital"
                  size="sm"
                  message="Olá Victor! Quero assinar o Seguro Digital para manter meu site protegido."
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
          <p className="text-muted-foreground text-sm mb-6">Para garantir a blindagem completa do seu patrimônio digital.</p>

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
            Tecnologias de Proteção
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
            Pronto para ter um <em className="not-italic text-primary">site blindado?</em>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Não espere ser atacado para agir. Proteja seu negócio hoje mesmo com tecnologia de ponta.
          </p>
          <WhatsAppCTA
            source="servico-seguranca-final"
            size="lg"
            message="Olá Victor! Quero proteger meu site com o serviço de Segurança Total. Vim da página de serviços."
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
              Processo de Blindagem
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
            source={`servico-seguranca-${plan.id}`}
            size="sm"
            message={`Olá Victor! Tenho interesse no plano ${plan.name} de Segurança Total.`}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
