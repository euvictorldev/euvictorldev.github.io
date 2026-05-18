import { useParams, Link } from "react-router-dom";
import { Globe, Bot, Smartphone, ShieldCheck, LifeBuoy, ArrowLeft, Clock, DollarSign, CheckCircle2, MessageCircle } from "lucide-react";
import { CTAGroup } from "@/components/CTAButtons";
import SitesQueVendem from "./SitesQueVendem";
import RobosDeAtendimento from "./RobosDeAtendimento";
import SeuAppExclusivo from "./SeuAppExclusivo";
import SegurancaTotal from "./SegurancaTotal";
import SempreComVoce from "./SempreComVoce";

interface ServiceData {
  slug: string;
  icon: typeof Globe;
  title: string;
  subtitle: string;
  features: string[];
  requirements: string[];
  whyChoose: string[];
  techs: string[];
  timeframe: string;
  priceFrom: string;
}

const servicesData: ServiceData[] = [
  {
    slug: "sites-que-vendem",
    icon: Globe,
    title: "Sites que Vendem",
    subtitle: "Páginas que atraem, convencem e convertem visitantes em clientes.",
    features: [
      "Design responsivo (funciona em qualquer tela)",
      "Otimização para Google (SEO)",
      "Velocidade de carregamento máxima",
      "Painel para você editar conteúdo",
      "Integração com WhatsApp e redes sociais",
    ],
    requirements: [
      "Identidade visual (logo, cores, fontes)",
      "Textos e imagens do seu negócio",
      "Domínio e hospedagem (posso ajudar)",
    ],
    whyChoose: [
      "Código limpo e documentado",
      "Suporte pós-entrega",
      "Metodologia ágil",
      "Comunicação transparente",
    ],
    techs: ["React", "Tailwind CSS", "Vite"],
    timeframe: "1–3 semanas",
    priceFrom: "A partir de R$ 1.500",
  },
  {
    slug: "robos-de-atendimento",
    icon: Bot,
    title: "Robôs de Atendimento",
    subtitle: "Automatize seu WhatsApp e Discord com atendentes que nunca dormem.",
    features: [
      "Atendimento automático 24h",
      "Respostas inteligentes com IA",
      "Integração com seu sistema de vendas",
      "Relatórios de atendimento",
      "Escalonamento para humano quando necessário",
    ],
    requirements: [
      "Fluxo de atendimento desejado",
      "Perguntas frequentes dos clientes",
      "Acesso ao WhatsApp Business / Discord",
    ],
    whyChoose: [
      "Redução de até 80% no tempo de resposta",
      "Atendimento consistente",
      "Escalável para qualquer volume",
      "Personalização total",
    ],
    techs: ["Node.js", "Python", "WhatsApp API"],
    timeframe: "1–2 semanas",
    priceFrom: "A partir de R$ 800",
  },
  {
    slug: "seu-app-exclusivo",
    icon: Smartphone,
    title: "Seu App Exclusivo",
    subtitle: "Aplicativos intuitivos que resolvem problemas reais do dia a dia.",
    features: [
      "Interface intuitiva e moderna",
      "Funciona em Android e iOS",
      "Notificações push",
      "Painel administrativo",
      "Atualizações e manutenção",
    ],
    requirements: [
      "Descrição do problema que o app resolve",
      "Público-alvo",
      "Funcionalidades desejadas",
    ],
    whyChoose: [
      "Design pensado no usuário final",
      "Código otimizado para performance",
      "Entrega por etapas",
      "Testes rigorosos",
    ],
    techs: ["React Native", "Supabase", "PostgreSQL"],
    timeframe: "3–6 semanas",
    priceFrom: "A partir de R$ 3.000",
  },
  {
    slug: "seguranca-total",
    icon: ShieldCheck,
    title: "Segurança Total",
    subtitle: "Proteção completa para seus dados e os dados dos seus clientes.",
    features: [
      "Certificado SSL (Cadeado Verde)",
      "Proteção Cloudflare & WAF",
      "Backup Automático Off-site",
      "Limpeza profunda de código",
      "Alarme Inteligente de invasão",
    ],
    requirements: [
      "Descrição do sistema atual",
      "Requisitos de conformidade",
      "Volume de dados",
    ],
    whyChoose: [
      "Experiência em cybersegurança",
      "Metodologia OWASP",
      "Relatórios detalhados",
      "Suporte emergencial",
    ],
    techs: ["Cloudflare", "WAF", "SSL"],
    timeframe: "2 a 25 dias",
    priceFrom: "A partir de R$ 250",
  },
  {
    slug: "sempre-com-voce",
    icon: LifeBuoy,
    title: "Sempre com Você",
    subtitle: "Suporte contínuo para garantir que nada pare de funcionar.",
    features: [
      "Monitoramento proativo",
      "Atualizações de segurança",
      "Suporte prioritário",
      "Backups regulares",
      "Relatórios mensais de saúde",
    ],
    requirements: [
      "Acesso ao sistema/servidor",
      "Histórico de problemas anteriores",
      "SLA desejado",
    ],
    whyChoose: [
      "Resposta rápida",
      "Prevenção antes da correção",
      "Transparência total",
      "Custo previsível",
    ],
    techs: ["Docker", "Redis", "Node.js"],
    timeframe: "Plano mensal",
    priceFrom: "A partir de R$ 500/mês",
  },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Dedicated pages for specific services
  if (slug === "sites-que-vendem") {
    return <SitesQueVendem />;
  }

  if (slug === "robos-de-atendimento") {
    return <RobosDeAtendimento />;
  }

  if (slug === "seu-app-exclusivo") {
    return <SeuAppExclusivo />;
  }

  if (slug === "seguranca-total") {
    return <SegurancaTotal />;
  }

  if (slug === "sempre-com-voce") {
    return <SempreComVoce />;
  }


  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground">Serviço não encontrado</h1>
          <Link to="/" className="mt-6 inline-block text-primary hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back button */}
      <div className="pt-8 px-6">
        <Link
          to="/#servicos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos Serviços
        </Link>
      </div>

      {/* Header */}
      <section className="pt-12 pb-16 px-6 text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mx-auto">
          <Icon className="h-10 w-10" strokeWidth={1.5} />
        </div>
        <h1 className="mt-8 font-display text-5xl md:text-7xl leading-[1] tracking-[-0.02em]">
          {service.title}
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
          {service.subtitle}
        </p>
      </section>

      {/* Content grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Features — spans 2 cols */}
          <div className="md:col-span-2 rounded-3xl border border-border bg-card/20 p-8">
            <h2 className="font-display text-2xl mb-6">Recursos Inclusos</h2>
            <div className="space-y-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className="rounded-3xl border border-primary/20 bg-card/40 p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl mb-6">Informações</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Prazo</span>
                  </div>
                  <span className="text-sm font-medium">{service.timeframe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">Preço</span>
                  </div>
                  <span className="text-xs font-bold bg-primary/10 text-primary rounded-full px-3 py-1">
                    {service.priceFrom}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <CTAGroup source={`servico-${service.slug}`} size="sm" />
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-3xl border border-border bg-card/20 p-8">
            <h2 className="font-display text-2xl mb-6">Requisitos do Projeto</h2>
            <div className="space-y-3">
              {service.requirements.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose */}
          <div className="rounded-3xl border border-border bg-card/20 p-8">
            <h2 className="font-display text-2xl mb-6">☆ Por que escolher?</h2>
            <div className="space-y-3">
              {service.whyChoose.map((w) => (
                <div key={w} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  <span className="text-sm text-muted-foreground">{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-3xl border border-border bg-card/20 p-8">
            <h2 className="font-display text-2xl mb-6">◇ Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {service.techs.map((t) => (
                <span
                  key={t}
                  className="text-xs px-4 py-1.5 rounded-full bg-muted/50 text-muted-foreground font-medium border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
