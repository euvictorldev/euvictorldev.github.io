import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  CheckCircle2,
  Zap,
  Target,
  Shield,
  Eye,
  Clock,
  Sparkles,
  Star,
  ChevronRight,
  Monitor,
  Server,
  Palette,
  BarChart3,
  Lock,
  FileText,
  HeadphonesIcon,
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
    id: "bio-link",
    name: "Bio-Link Estratégico",
    idealFor: "Profissionais e pequenos negócios que precisam centralizar sua presença digital.",
    priceFrom: "R$ 250",
    priceLabel: "A partir de",
    timeframe: "7 a 10 dias úteis",
    highlighted: false,
    keyFeatures: [
      "Design Mobile-First otimizado",
      "Botão de WhatsApp flutuante e animado",
      "Domínio próprio configurado",
      "Certificado SSL incluso",
    ],
    fullFeatures: [
      "Links estratégicos organizados por funil de vendas",
      "Bio persuasiva e foto de perfil/logo",
      "Chamadas de ação destacadas para WhatsApp/Catálogo",
      "Links secundários (redes sociais, localização, portfólio)",
      "Rodapé minimalista com ícones",
    ],
    structure: [
      "Cabeçalho com foto/logo + bio persuasiva",
      "Botões de ação primários (WhatsApp/Catálogo)",
      "Links secundários organizados",
      "Rodapé minimalista com SSL",
    ],
  },
  {
    id: "landing-page",
    name: "Landing Page Express",
    idealFor: "Prestadores de serviços que querem receber tráfego pago com alta conversão.",
    priceFrom: "R$ 850",
    priceLabel: "A partir de",
    timeframe: "15 a 22 dias úteis",
    highlighted: true,
    badge: "Recomendado",
    keyFeatures: [
      "Estrutura de conversão completa",
      "PageSpeed 90+ garantido",
      "Pixels Meta + Google instalados",
      "Formulário inteligente (e-mail ou WhatsApp)",
    ],
    fullFeatures: [
      "Headline matadora + benefícios + depoimentos + FAQ",
      "SEO básico para indexação no Google",
      "Otimização de velocidade para não desperdiçar cliques",
      "Conformidade LGPD no rodapé",
    ],
    structure: [
      "Hero (headline de impacto + subheadline + CTA)",
      "Prova social (logos ou destaques)",
      "Seção de solução (como seu serviço resolve o problema)",
      "Depoimentos (prints/vídeos de clientes)",
      "FAQ para quebra de objeções",
      "Rodapé com links de conformidade (LGPD)",
    ],
  },
  {
    id: "pagina-pro",
    name: "Página de Vendas Pro",
    idealFor: "Infoprodutores e cursos online que buscam automação total da venda ao checkout.",
    priceFrom: "R$ 1.950",
    priceLabel: "A partir de",
    timeframe: "25 a 35 dias úteis",
    highlighted: false,
    keyFeatures: [
      "Design exclusivo e personalizado",
      "Checkout integrado (Kiwify/Hotmart/Eduzz)",
      "Página de obrigado + funil pós-venda",
      "Copywriting refinado por IA",
    ],
    fullFeatures: [
      "VSL (Vídeo de Vendas) na hero",
      "Detalhamento de módulos e bônus",
      "Tabela de planos e preços",
      "Selos de garantia e botões diretos de checkout",
      "Segurança avançada e proteção contra Brute Force",
      "Página de obrigado com instruções + suporte",
    ],
    structure: [
      "Hero com VSL (Vídeo de Vendas)",
      "Transformação do produto",
      "Módulos e bônus detalhados",
      "Tabela de planos/preços",
      "Selos de garantia + botões de checkout",
      "Página de obrigado + instruções de acesso",
    ],
  },
];

const addons = [
  { name: "Segurança Cloudflare WAF", price: "+R$ 500", icon: Shield },
  { name: "Tracking Avançado de Eventos", price: "+R$ 300", icon: BarChart3 },
  { name: "Identidade Visual Básica", price: "+R$ 450", icon: Palette },
  { name: "Integração com CRM", price: "A partir de +R$ 500", icon: Target },
];

const trustPoints = [
  { icon: Zap, title: "Agilidade com IA", desc: "Semanas, não meses." },
  { icon: Target, title: "Foco em Lucro", desc: "Ferramenta de faturamento." },
  { icon: Shield, title: "Comprometimento", desc: "Performance e estabilidade." },
  { icon: Eye, title: "Transparência", desc: "Você é dono de tudo." },
];

const techStack = [
  "Next.js 15", "React", "Vite", "Astro",
  "Tailwind CSS", "Framer Motion", "Figma",
  "Cloudflare", "Vercel", "Supabase",
  "OpenAI API", "Node.js", "TypeScript",
];

const requirementsFAQ = [
  {
    id: "req-1",
    title: "Identidade e Conteúdo (Todos os Planos)",
    items: [
      "Logotipo em alta resolução ou vetor (se houver)",
      "Paleta de cores da marca (se houver)",
      "Textos iniciais e fotos/vídeos dos produtos ou serviços",
    ],
  },
  {
    id: "req-2",
    title: "Acessos Técnicos (Landing Page e Pro)",
    items: [
      "Acesso ao painel do domínio (ex: Registro.br)",
      "Acesso como Admin ao Gerenciador de Negócios (Meta/Facebook) e Google Ads",
      "Exemplos de sites que você gosta (referências visuais)",
    ],
  },
  {
    id: "req-3",
    title: "Estrutura de Vendas (Apenas Plano Pro)",
    items: [
      "Links dos produtos nas plataformas de pagamento (Kiwify, Hotmart, etc)",
      "Detalhes de bônus, garantias e ofertas exclusivas",
    ],
  },
];

/* ─── Component ─── */
export default function SitesQueVendem() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ── Hero (includes back button so glow extends behind it) ── */}
      <section className="pt-8 pb-16 px-6 relative">
        {/* Radial glow behind entire hero area */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        {/* Back Button */}
        <div className="relative z-10 mb-12">
          <Link
            to="/#servicos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos Serviços
          </Link>
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mx-auto">
            <Globe className="h-10 w-10" strokeWidth={1.5} />
          </div>
          <h1 className="mt-8 font-display text-fluid-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
            Sites que <em className="not-italic text-primary">Vendem</em>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Páginas de alta performance, otimizadas com Inteligência Artificial e focadas em{" "}
            <span className="text-foreground font-medium">transformar cliques em clientes.</span>
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
          <Card className="border-border/50 bg-card/15 overflow-hidden">
            <CardContent className="p-8 md:flex md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HeadphonesIcon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Plano de Performance e Continuidade</h3>
                    <p className="text-xs text-muted-foreground">A assinatura que mantém sua máquina de vendas rodando.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {[
                    { icon: Server, label: "Hospedagem gerenciada" },
                    { icon: Eye, label: "Vigilância 24/7" },
                    { icon: Lock, label: "Backups regulares" },
                    { icon: FileText, label: "Relatório mensal" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  + Suporte prioritário com até 2h mensais para pequenos ajustes.
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-center md:text-right flex-shrink-0">
                <div className="text-3xl font-bold">
                  R$ 120<span className="text-base font-normal text-muted-foreground">/mês</span>
                </div>
                <WhatsAppCTA
                  source="servico-sites-venda-mensal"
                  size="sm"
                  message="Olá Victor! Quero saber mais sobre o plano mensal de continuidade."
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
            Personalize seu <em className="not-italic text-primary">projeto</em>
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
          <p className="text-muted-foreground text-sm mb-6">Para começarmos o projeto.</p>

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
            Tecnologias de Elite
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
            Pronto para ter um site que{" "}
            <em className="not-italic text-primary">realmente vende?</em>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Vamos conversar sobre o seu projeto. Sem compromisso, sem enrolação.
          </p>
          <WhatsAppCTA
            source="servico-sites-venda-final"
            size="lg"
            message="Olá Victor! Quero um site que vende de verdade. Vim da página de serviços."
          />
        </div>
      </section>
    </main>
  );
}

/* ─── Plan Card Sub-Component ─── */
function PlanCard({ plan }: { plan: Plan }) {
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
              Estrutura da página
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
            source={`servico-sites-venda-${plan.id}`}
            size="sm"
            message={`Olá Victor! Tenho interesse no plano ${plan.name}. Vim da página de serviços.`}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
