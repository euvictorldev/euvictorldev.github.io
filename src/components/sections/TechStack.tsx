import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import ScrollReveal from "../ScrollReveal";
import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiFlutter,
  SiGo,
  SiTypescript,
  SiMongodb,
} from "@icons-pack/react-simple-icons";

const techIcons = [
  { Icon: SiReact, name: "React", color: "#61DAFB", category: "Library (Frontend)", energy: 95, relatedIds: [2, 3], content: "Desenvolvimento de interfaces modernas e performáticas com foco em experiência do usuário." },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Language", energy: 90, relatedIds: [1, 5], content: "Tipagem estática para garantir segurança e escalabilidade em projetos de grande porte." },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", category: "Styling", energy: 95, relatedIds: [1], content: "Estilização rápida e consistente utilizando o poder dos utilitários CSS." },
  { Icon: SiFlutter, name: "Flutter", color: "#02569B", category: "Framework (Mobile)", energy: 85, relatedIds: [9], content: "Criação de aplicativos nativos para iOS e Android com performance fluida." },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend (Runtime)", energy: 88, relatedIds: [2, 12, 11, 8], content: "Construção de APIs escaláveis e rápidas utilizando o ecossistema JavaScript." },
  { Icon: SiPython, name: "Python", color: "#3776AB", category: "Language", energy: 80, relatedIds: [5], content: "Automação, scripts inteligentes e integração de sistemas de forma eficiente." },
  { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E", category: "BaaS (Platform)", energy: 92, relatedIds: [12], content: "Infraestrutura de backend completa com autenticação e banco de dados em tempo real." },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database (NoSQL)", energy: 82, relatedIds: [5], content: "Armazenamento flexível de dados focado em agilidade e alta disponibilidade." },
  { Icon: SiGo, name: "Go", color: "#00ADD8", category: "Language", energy: 75, relatedIds: [5], content: "Lógica de alta performance e microsserviços eficientes." },
  { Icon: SiDocker, name: "Docker", color: "#2496ED", category: "Infraestrutura", energy: 85, relatedIds: [5, 12, 11, 8], content: "Isolamento e consistência de ambientes para deploy contínuo e estável." },
  { Icon: SiRedis, name: "Redis", color: "#DC382D", category: "Cache / DB", energy: 88, relatedIds: [5, 12], content: "Aceleração de aplicações com cache em memória de altíssima velocidade." },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "Database (SQL)", energy: 90, relatedIds: [5, 7], content: "Persistência robusta de dados com suporte total a consultas complexas." },
];

const timelineData = techIcons.map((t, idx) => ({
  id: idx + 1,
  title: t.name,
  date: "Experiência",
  content: t.content,
  category: t.category,
  icon: t.Icon,
  relatedIds: t.relatedIds,
  status: "completed" as const,
  energy: t.energy,
}));

export default function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-narrow relative">
        <ScrollReveal className="text-center mb-8 md:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">
            Conhecimentos
          </span>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight">
            As ferramentas que{" "}
            <em className="not-italic text-primary">alimentam seus projetos.</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-fluid-base max-w-2xl mx-auto text-balance">
            Utilizo tecnologias escaláveis e modernas para garantir que sua ideia cresça sem limites técnicos.
          </p>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          <ScrollReveal delay="[animation-delay:200ms]">
            <div className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center">
              <RadialOrbitalTimeline timelineData={timelineData} />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4 md:mt-6 px-4">
              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-full px-3.5 py-2 bg-card/40 border border-border/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300"
                >
                  <tech.Icon color={tech.color} size={14} />
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
