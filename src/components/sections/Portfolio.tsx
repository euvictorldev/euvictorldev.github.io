import { useRef, useEffect, useState, memo } from "react";
import ScrollReveal from "../ScrollReveal";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   Data
   ───────────────────────────────────────────────────────────── */

interface FeaturedProject {
  name: string;
  role: string;
  status: string;
  description: string;
  longDesc: React.ReactNode;
  stack: string[];
  video?: string;
  webmSrc?: string;
  poster?: string;
  image?: string;
  borderStyle: string;
  mediaType: "video" | "image" | "placeholder";
  zoom?: number;
  glowColor?: string;
  date?: string;
}

interface SecondaryProject {
  name: string;
  role: string;
  status: string;
  desc: string;
  longDesc: React.ReactNode;
  stack: string[];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const featuredProjects: FeaturedProject[] = [
  {
    name: "Hades-Agent",
    role: "AI Product Engineer",
    status: "mai de 2026 - o momento",
    description: "Assistente nativo de IA para desktop com orquestração de agentes autônomos e processamento de áudio em tempo real.",
    longDesc: (
      <div className="space-y-4">
        <p>Arquitetura e desenvolvimento do Hades-Agent, um ecossistema de IA desktop projetado para operar com alta autonomia (Agentic ReAct Loop) e baixa latência.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Arquitetura Desktop (Electron):</strong> Centralização da captura de atalhos globais sem concorrência de I/O. Implementação de padrão Singleton com ocultação de janelas.</li>
            <li><strong className="text-white">Loop Agentic ReAct (Gemini):</strong> Motor autônomo no frontend que gerencia iterações via IPC e decide dinamicamente ferramentas como buscas web e capturas de tela.</li>
            <li><strong className="text-white">Streaming de Áudio em Tempo Real:</strong> Pipeline para fatiar o sinal e transmitir via WebSockets e IPC com integração nativa ao gemini-2.5-flash-native-audio.</li>
            <li><strong className="text-white">Mecanismo de Autoevolução:</strong> Daemon assíncrono que processa logs históricos, gera correções de comportamento e escreve próprias habilidades em Markdown.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Electron", "Node.js", "Gemini API", "TypeScript"],
    image: `${base}/images/icon.png`,
    borderStyle: "cyber",
    mediaType: "image",
    glowColor: "rgba(239, 68, 68, 0.4)",
    date: "mai/26",
  },
  {
    name: "Tô Brocado",
    role: "Mobile Full-Stack Engineer",
    status: "abr de 2026",
    description: "Ecossistema móvel full-stack de delivery local com arquitetura Feature-First e segurança zero-trust.",
    longDesc: (
      <div className="space-y-4">
        <p>Plataforma de delivery desenvolvida para alta performance, UI instantânea e segurança zero-trust, eliminando taxas de intermediação.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Estado Reativo & UI Otimista:</strong> Arquitetura via Riverpod. Mutação instantânea da interface com rollback silencioso em falhas.</li>
            <li><strong className="text-white">Geolocalização Otimizada:</strong> Arquitetura híbrida com cache local e GPS via Geolocator. Filtragem diretamente na engine do Supabase.</li>
            <li><strong className="text-white">Sincronização Realtime & Webhooks:</strong> Automação de PIX via PostgreSQL CDC e WebSockets com validação HMAC SHA-256.</li>
            <li><strong className="text-white">Buffering & Bulk Writes:</strong> I/O otimizado com retenção em memória e chamadas RPC em lote a cada 5s.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Flutter", "Riverpod", "Supabase", "PostgreSQL"],
    video: `${base}/videos/mobile-app.mp4`,
    webmSrc: `${base}/videos/mobile-app.webm`,
    poster: `${base}/images/mobile-app-poster.webp`,
    borderStyle: "mobile",
    mediaType: "video",
    glowColor: "rgba(139, 92, 246, 0.5)",
    date: "abr/26",
  },
  {
    name: "GhostCommit",
    role: "Creator & Software Engineer",
    status: "mai de 2026 - o momento",
    description: "Extensão open-source para VS Code focada em automação de commits programáticos via GitHub API.",
    longDesc: (
      <div className="space-y-4">
        <p>Extensão open-source para VS Code, VSCodium e Antigravity, operando nos bastidores para mapear e ofuscar a atividade local de desenvolvimento e interações via IA.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">VS Code API & Listeners:</strong> Observadores em tempo real para interceptar alterações feitas por humanos ou agentes autônomos.</li>
            <li><strong className="text-white">Commit Programático:</strong> Integração assíncrona (@octokit/rest) com pushes via payloads Base64 e autenticação sem persistência de tokens locais.</li>
            <li><strong className="text-white">Motor SVG Nativo & Cache Busting:</strong> Renderização em TypeScript puro de gráficos injetados no README quebrando políticas estáticas do GitHub.</li>
            <li><strong className="text-white">I/O Não-Bloqueante:</strong> Armazenamento em memória com debouncing e ofuscação de nomes de clientes ou arquivos sigilosos.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["TypeScript", "VS Code API", "Node.js", "Octokit"],
    image: `${base}/images/ghostcommit-icon.png`,
    borderStyle: "ghost",
    mediaType: "image",
    glowColor: "rgba(255, 255, 255, 0.4)",
    date: "mai/26",
  },
  {
    name: "HadesPay",
    role: "Full-Stack Product Engineer",
    status: "dez de 2025 - fev de 2026",
    description: "Gateway multitenant de automação de cobranças e orquestração de IA via WhatsApp, com RAG e RLS.",
    longDesc: (
      <div className="space-y-4">
        <p>Arquitetura full-stack construída para suportar volumes massivos de interações financeiras automatizadas via WhatsApp e agentes de inteligência artificial.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Debounce com Redis:</strong> Rolling window para agrupar mensagens fragmentadas e reduzir drasticamente os custos da LLM.</li>
            <li><strong className="text-white">Resiliência (Circuit Breaker):</strong> Isolamento de instabilidades e uso do Outbox Pattern com arq workers para reprocessamento.</li>
            <li><strong className="text-white">Busca Vetorial (RAG):</strong> Integração nativa com pgvector no PostgreSQL e índices HNSW para injeção semântica ultrarrápida.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    video: `${base}/videos/discord-bot.mp4`,
    webmSrc: `${base}/videos/discord-bot.webm`,
    poster: `${base}/images/hadespay-poster.webp`,
    borderStyle: "browser",
    mediaType: "video",
    glowColor: "rgba(239, 68, 68, 0.4)",
    date: "dez/25",
  },
  {
    name: "Bloom",
    role: "Software Engineer",
    status: "mai de 2026",
    description: "Plataforma de telessaúde serverless integrando WebRTC nativo, transferência de arquivos e acesso zero-auth.",
    longDesc: (
      <div className="space-y-4">
        <p>Sistema focado em pediatria online projetado para ter custo zero em repouso e zero fricção de acesso para o paciente.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">WebRTC Puro & Sinalização Realtime:</strong> Sinalização peer-to-peer construída sobre Broadcast do Supabase e STUN Servers.</li>
            <li><strong className="text-white">Fluxo Zero-Auth:</strong> UUIDs únicos via rotas dinâmicas do Next.js alocando o paciente em sala de espera sem criar conta.</li>
            <li><strong className="text-white">Transferência Segura e Pushs:</strong> Bloqueio sumário de extensões via borda e disparo de notificações Web Push integradas ao banco.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["TypeScript", "Next.js", "Supabase", "WebRTC"],
    borderStyle: "browser",
    mediaType: "placeholder",
    glowColor: "rgba(59, 130, 246, 0.4)",
    date: "mai/26",
  },
  {
    name: "Integração Real-Time Discord",
    role: "Software Engineer",
    status: "jul de 2024",
    description: "Robô de telemetria sincronizada via UDP conectando servidores dedicados de Project Zomboid ao Discord.",
    longDesc: (
      <div className="space-y-4">
        <p>Um desafio de otimização de banda de rede (Network I/O) e conformidade rígida com os Rate Limits da API do Discord.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Marcos de Engenharia & Soluções:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Comunicação UDP Raw:</strong> Cliente assíncrono para interrogar servidores via pacotes binários utilizando protocolo Valve A2S_INFO.</li>
            <li><strong className="text-white">Cache & Polling Inteligente:</strong> Intervalos de varredura (Sliding Window) isolando ataques DDoS acidentais.</li>
            <li><strong className="text-white">Gestão de Limites:</strong> Enfileiramento de edição de Rich Embeds para respeitar as restrições de gateway WebSocket da plataforma.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Node.js", "UDP Sockets", "Discord API"],
    image: `${base}/images/discord-bot-preview.png`,
    borderStyle: "discord",
    mediaType: "image",
    glowColor: "rgba(88, 101, 242, 0.4)",
    date: "jul/24",
  },
  {
    name: "YT-Link-Player",
    role: "Software Engineer",
    status: "ago 2023 - set 2023",
    description: "Player de música desktop minimalista focado em baixo consumo de RAM, rodando streams nativamente.",
    longDesc: (
      <div className="space-y-4">
        <p>O projeto focou estritamente em mitigar o excessivo consumo de recursos operacionais dos navegadores modernos durante o processamento de áudio em background.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Desafios Técnicos & Aprendizados:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Otimização de RAM (Low Footprint):</strong> Isolamento do runtime interno do Electron focado quase puramente na extração e conversão do áudio.</li>
            <li><strong className="text-white">YouTube Data API v3:</strong> Tratamento e paginação assíncrona de URLs profundas superando as restrições da API Google.</li>
            <li><strong className="text-white">Tray System:</strong> Integração com ciclo de vida do SO e suporte para System Tray não obstrutivo.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Electron.js", "Node.js", "YouTube API"],
    video: `${base}/videos/youtube-link-player-showcase.mp4`,
    webmSrc: `${base}/videos/youtube-link-player-showcase.webm`,
    poster: `${base}/images/yt-link-player-poster.webp`,
    borderStyle: "browser",
    mediaType: "video",
    zoom: 2,
    glowColor: "rgba(255, 255, 255, 0.5)",
    date: "ago/23",
  },
];

const secondaryProjects: SecondaryProject[] = [
  {
    name: "CryptoSwift Pay",
    role: "Backend Engineer",
    status: "nov de 2025",
    desc: "Gateway No-KYC para automação de pagamentos multi-criptomoedas via NowPayments.",
    longDesc: (
      <div className="space-y-4">
        <p>Sistema focado em privacidade total e ausência de atrito no checkout de transações baseadas em criptoativos.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Engenharia do Sistema:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Integração API:</strong> Consumo REST nativo para geração em tempo real de endereços temporários por sessão.</li>
            <li><strong className="text-white">IPN (Webhooks):</strong> Desenvolvimento de rotinas assíncronas para captura, parsing e validação criptográfica de pagamentos confirmados.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "REST APIs", "Webhooks", "JSON"],
  },
  {
    name: "CloneMaster Bot",
    role: "Software Engineer",
    status: "set de 2025",
    desc: "Robô de espelhamento para Telegram focado em concorrência de mídia com baixa latência.",
    longDesc: (
      <div className="space-y-4">
        <p>Arquitetura projetada para suportar replicação em tempo real de mídias de alto volume mantendo um event loop fluido.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Engenharia do Sistema:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">MTProto (Orientado a Eventos):</strong> Parsing imediato de payloads simultâneos em múltiplos canais de origem utilizando Telethon.</li>
            <li><strong className="text-white">Buffers Assíncronos:</strong> Filas dedicadas de uploads/downloads isoladas para evitar o congelamento da thread primária.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "Telethon", "AsyncIO", "Streams"],
  },
  {
    name: "SocialBuddy",
    role: "Software Engineer",
    status: "ago de 2025",
    desc: "Motor de orquestração multi-token para automação e engajamento escalável no Telegram.",
    longDesc: (
      <div className="space-y-4">
        <p>Engine de engajamento baseada em protocolo nativo para coordenar uma frota em paralelo.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Engenharia do Sistema:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Controle Centralizado:</strong> Despacho sincronizado de comandos direcionados a canais e posts específicos.</li>
            <li><strong className="text-white">Anti-Flood Limits:</strong> Algoritmos de enfileiramento HTTP com jitter para contornar restrições severas de Rate Limits (FloodWait).</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "Telebot", "AsyncIO", "API Limits"],
  },
  {
    name: "MercadoLink Bot",
    role: "Software Engineer",
    status: "jul de 2025",
    desc: "Plataforma nativa de checkout no Telegram com automação de liberações via Mercado Pago.",
    longDesc: (
      <div className="space-y-4">
        <p>Transformação do aplicativo de chat convencional em uma vitrine autônoma de vendas (e-commerce inserido).</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Engenharia do Sistema:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Vitrine UI/UX:</strong> Uso agressivo de Inline Keyboards para guiar o consumo do catálogo.</li>
            <li><strong className="text-white">Fulfillment Autônomo:</strong> Interceptação dos webhooks do gateway bancário resultando no disparo automático das mídias digitais para os clientes aprovados.</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "Telebot", "Mercado Pago"],
  },
  {
    name: "PassGuard OSINT",
    role: "Security Engineer",
    status: "fev de 2025",
    desc: "Ferramenta de inteligência aberta focada em detecção e monitoramento de senhas vazadas.",
    longDesc: (
      <div className="space-y-4">
        <p>Sistemas analíticos construídos para verificar integridade digital mantendo total privacidade das senhas originais.</p>
        <div className="space-y-2 mt-4">
          <p className="font-bold text-primary text-sm tracking-widest uppercase">⚡ Engenharia do Sistema:</p>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-base">
            <li><strong className="text-white">Scraping de Dumps:</strong> Integração com as maiores bases globais (como HIBP) via APIs REST para varredura cíclica.</li>
            <li><strong className="text-white">Motor Criptográfico:</strong> Hashing bidirecional usando SHA-256 para k-Anonymity (sem exposição da plain text).</li>
          </ul>
        </div>
      </div>
    ),
    stack: ["Python", "OSINT", "Criptografia", "REST"],
  },
];

/* ─────────────────────────────────────────────────────────────
   Components
   ───────────────────────────────────────────────────────────── */

const LazyVideo = memo(({ src, webmSrc, poster, style, zoom = 1, isPaused, glowColor }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIsInView(e.isIntersecting), { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPaused || !isInView) videoRef.current.pause();
    else videoRef.current.play().catch(() => {});
  }, [isPaused, isInView]);

  return (
    <div ref={containerRef} className="relative w-full overflow-visible py-2 flex justify-center md:justify-start">
      {/* Dynamic Glow Container */}
      <div className={cn(
        "absolute blur-[60px] opacity-30 -z-10",
        style === "mobile" ? "aspect-[9/19] w-[160px]" : "aspect-video w-full max-w-[480px]"
      )} style={{ background: glowColor || 'transparent' }} />

      <div className={cn(
        "relative overflow-hidden bg-black/40 border border-white/10",
        style === "mobile" ? "aspect-[9/19] rounded-[2rem] w-[185px]" : "aspect-video rounded-xl w-full max-w-[520px]"
      )}>
        {style === "browser" && (
          <div className="bg-[#151515] px-4 py-2 flex gap-1.5 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
            <div className="w-2 h-2 rounded-full bg-green-500/20" />
          </div>
        )}
        <video
          ref={videoRef}
          poster={poster}
          loop muted playsInline autoPlay
          className={cn("w-full h-full object-cover", style === "mobile" ? "object-left" : "object-center")}
          style={{ transform: `scale(${zoom})` }}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
});

const ProjectMedia = memo(({ project, isPaused }: any) => {
  if (project.mediaType === "video") return <LazyVideo {...project} isPaused={isPaused} style={project.borderStyle} />;
  if (project.mediaType === "image") {
    if (project.borderStyle === "cyber") {
      return (
        <div className="relative py-2 px-1 flex justify-center md:justify-start w-full max-w-[320px] mx-auto md:mx-0">
          <div className="absolute inset-0 blur-[60px] opacity-35 -z-10 rounded-full" style={{ background: project.glowColor || 'transparent' }} />
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-red-500/60 shadow-[0_0_35px_rgba(239,68,68,0.35)] group-hover:border-red-500 group-hover:shadow-[0_0_55px_rgba(239,68,68,0.6)] transition-all duration-500 bg-black flex items-center justify-center">
            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" />
          </div>
        </div>
      );
    }

    if (project.borderStyle === "ghost") {
      return (
        <div className="relative py-2 px-1 flex justify-center md:justify-start w-full max-w-[320px] mx-auto md:mx-0">
          <div className="absolute inset-0 blur-[60px] opacity-35 -z-10 rounded-full" style={{ background: project.glowColor || 'transparent' }} />
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-white/40 shadow-[0_0_35px_rgba(255,255,255,0.25)] group-hover:border-white group-hover:shadow-[0_0_55px_rgba(255,255,255,0.5)] transition-all duration-500 bg-black flex items-center justify-center backdrop-blur-xl">
            <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative py-2 px-1 flex justify-center md:justify-start w-full max-w-[320px] mx-auto md:mx-0">
        <div className="absolute inset-0 blur-[60px] opacity-30 -z-10 rounded-full" style={{ background: project.glowColor || 'transparent' }} />
        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-2 border-[#5865F2]/50 shadow-[0_0_35px_rgba(88,101,242,0.3)] group-hover:border-[#5865F2] group-hover:shadow-[0_0_55px_rgba(88,101,242,0.5)] transition-all duration-500 bg-black flex items-center justify-center">
          <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" />
        </div>
      </div>
    );
  }
  return <div className="aspect-video bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground uppercase text-xs tracking-widest">Em breve</div>;
});

const TimelineText = ({ project, side, onSelect }: any) => (
    <ScrollReveal direction={side === "left" ? "right" : "left"} className={cn("space-y-4 w-full max-w-md", side === "left" ? "md:text-right md:ml-auto" : "md:text-left")}>
    <div className={cn("inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20", side === "left" && "md:flex-row-reverse")}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{project.role}</span>
    </div>
    <h3 className="text-fluid-4xl font-display leading-tight">{project.name}</h3>
    <p className="text-muted-foreground text-fluid-base leading-relaxed">{project.description}</p>
    <div className={cn("flex items-center gap-2 text-primary text-sm font-bold transition-all", side === "left" && "md:ml-auto md:flex-row-reverse")}>
      Ver detalhes <span className={cn("text-lg transition-transform", side === "left" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")}>→</span>
    </div>
  </ScrollReveal>
);

/* ─────────────────────────────────────────────────────────────
   Main Sections
   ───────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="portfolio" className="pt-24 pb-32 md:pt-48 md:pb-64 bg-[hsl(var(--bg-charcoal-deep))] relative overflow-hidden">
      <div className="container relative z-10">
        <ScrollReveal className="max-w-2xl mb-24">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">Portfólio</span>
          <h2 className="text-fluid-4xl font-display mt-6 leading-tight">Inovação em <span className="text-primary italic">cada etapa.</span></h2>
          <p className="text-muted-foreground text-fluid-base mt-6 leading-relaxed max-w-xl">
            Uma jornada cronológica pelos projetos que definiram minha evolução como desenvolvedor e estrategista digital.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Central Eixo - Extended length and improved visibility */}
          <div className="absolute left-[56px] md:left-1/2 top-0 bottom-[-150px] w-px bg-gradient-to-b from-primary/40 via-primary/40 via-[90%] to-transparent -translate-x-1/2" />

          <div className="space-y-32 md:space-y-48">
            {featuredProjects.map((p, i) => {
              const isEven = i % 2 === 0;
              return (
                <div 
                  key={p.name} 
                  onClick={() => setSelectedProject(p)}
                  className="relative grid grid-cols-[112px_1fr] md:grid-cols-[1fr_120px_1fr] items-center group cursor-pointer"
                >
                  
                  {/* Column 1: Desktop Left / Mobile Hidden Content Slot */}
                  <div className="hidden md:flex items-center justify-end pr-12 overflow-visible">
                    {isEven ? (
                      <TimelineText project={p} side="left" onSelect={setSelectedProject} />
                    ) : (
                      <ProjectMedia project={p} isPaused={!!selectedProject} />
                    )}
                  </div>

                  {/* Column 2: Timeline Axis (Always visible) */}
                  <div className="flex flex-col items-center justify-center relative h-full">
                    <div className="w-5 h-5 rounded-full bg-primary shadow-[0_0_20px_rgba(0,255,65,0.8)] border-4 border-black z-30" />
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 scale-75 md:scale-100 bg-black/95 border border-primary/40 px-4 py-1.5 rounded-full text-[11px] font-bold text-primary uppercase tracking-widest shadow-2xl whitespace-nowrap z-30 origin-center">
                      {p.date}
                    </div>
                  </div>

                  {/* Column 3: Desktop Right / Mobile Content Slot */}
                  <div className="flex flex-col md:flex-row items-center justify-start pl-2 md:pl-12 overflow-visible">
                    <div className="w-full md:hidden mb-12">
                      <TimelineText project={p} side="right" onSelect={setSelectedProject} />
                    </div>
                    {isEven ? (
                      <ProjectMedia project={p} isPaused={!!selectedProject} />
                    ) : (
                      <div className="hidden md:block w-full">
                        <TimelineText project={p} side="right" onSelect={setSelectedProject} />
                      </div>
                    )}
                    {!isEven && (
                      <div className="md:hidden w-full">
                        <ProjectMedia project={p} isPaused={!!selectedProject} />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Secondary */}
        <div className="mt-64 border-t border-white/5 pt-32">
          <h3 className="text-muted-foreground uppercase tracking-[0.2em] text-sm font-bold mb-16">Especialidades & Bots</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {secondaryProjects.map(p => (
              <button key={p.name} onClick={() => setSelectedProject(p)} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all text-left">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h4 className="text-fluid-2xl font-display group-hover:text-primary transition-colors">{p.name}</h4>
                  <span className="text-[9px] font-bold text-primary/40 uppercase tracking-widest text-right">{p.role}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest group-hover:gap-2 flex items-center transition-all">Saber mais →</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
          <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{selectedProject.role} • {selectedProject.status}</span>
                  <h2 className="text-fluid-4xl font-display mt-2">{selectedProject.name}</h2>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="text-muted-foreground leading-relaxed">{selectedProject.longDesc}</div>
              <div className="flex flex-wrap gap-2 pt-4">
                {selectedProject.stack.map((s: string) => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-primary/80 uppercase">{s}</span>
                ))}
              </div>
              <button onClick={() => setSelectedProject(null)} className="w-full py-4 bg-primary text-black font-bold rounded-xl mt-8">Voltar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
