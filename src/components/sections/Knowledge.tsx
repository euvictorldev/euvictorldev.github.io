import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "../ScrollReveal";

const books = [
  { title: "Clean Code", author: "Robert C. Martin", status: "Lido", color: "from-blue-500/20 to-cyan-500/20" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", status: "Lido", color: "from-purple-500/20 to-pink-500/20" },
  { title: "Refactoring", author: "Martin Fowler", status: "Lido", color: "from-orange-500/20 to-red-500/20" },
  { title: "Building Microservices", author: "Sam Newman", status: "Lendo", color: "from-emerald-500/20 to-teal-500/20" },
];

const certificates = [
  { name: "Fullstack Master", issuer: "Rocketseat", year: "2023", color: "from-emerald-500/20 to-green-500/20" },
  { name: "Cloud Practitioner", issuer: "AWS", year: "2024", color: "from-orange-500/20 to-yellow-500/20" },
  { name: "Cybersecurity Specialist", issuer: "Google", year: "2023", color: "from-blue-500/20 to-indigo-500/20" },
  { name: "UI/UX Advanced", issuer: "Udemy", year: "2022", color: "from-pink-500/20 to-rose-500/20" },
];

export default function Knowledge() {
  return (
    <section id="conhecimento" className="section-padding bg-transparent relative overflow-hidden z-10">
      {/* Radial glow for vividness - Reduced size to prevent clipping at top/bottom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[800px] h-[50%] bg-primary/[0.06] rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="container-narrow relative z-20">
        <ScrollReveal className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.25em] font-bold px-4 py-1">
            Evolução Contínua
          </Badge>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight text-balance">
            Onde eu busco as <em className="not-italic text-primary">referências</em> para o seu sucesso.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Livros Column */}
          <ScrollReveal className="space-y-8" delay="[animation-delay:150ms]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display">Livros</h3>
                <p className="text-sm text-muted-foreground">Teoria e fundamentos sólidos</p>
              </div>
            </div>

            <div className="grid gap-4">
              {books.map((book, i) => (
                <Card 
                  key={i} 
                  className="liquid-glass border-white/5 bg-[#0c0c0c] hover:bg-[#111111] hover:border-primary/30 transition-all group"
                >
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${book.color} flex items-center justify-center border border-white/20 group-hover:border-primary/50 transition-all duration-300`}>
                        <BookOpen className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{book.title}</h4>
                        <p className="text-xs text-muted-foreground/80">{book.author}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase font-bold">
                      {book.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>

          {/* Certificados Column */}
          <ScrollReveal className="space-y-8" delay="[animation-delay:300ms]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display">Certificados & Cursos</h3>
                <p className="text-sm text-muted-foreground">Prática e especialização técnica</p>
              </div>
            </div>

            <div className="grid gap-4">
              {certificates.map((cert, i) => (
                <Card 
                  key={i} 
                  className="liquid-glass border-white/5 bg-[#0c0c0c] hover:bg-[#111111] hover:border-primary/30 transition-all group"
                >
                  <CardContent className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center border border-white/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300`}>
                        <Award className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground/80">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">{cert.year}</span>
                      <CheckCircle2 className="w-4 h-4 text-primary ml-auto mt-1 opacity-60" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
