import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ShapeDivider from "@/components/ShapeDivider";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  {
    question: "Quanto tempo leva para meu projeto ficar pronto?",
    answer: "Geralmente de 1 a 3 semanas para sites e robôs de automação. Aplicativos mais complexos podem levar de 4 a 6 semanas. Eu trabalho com entregas por etapas, então você consegue acompanhar e testar a evolução em tempo real.",
  },
  {
    question: "Eu preciso fornecer todos os textos e imagens?",
    answer: "Se você já tiver, ótimo! Caso contrário, eu posso te auxiliar na estruturação dos textos e na seleção de imagens profissionais que combinem com a sua marca, garantindo um visual premium desde o primeiro dia.",
  },
  {
    question: "Como funciona a forma de pagamento?",
    answer: "Trabalho de forma flexível: geralmente 50% de entrada e 50% na entrega final. Aceito PIX, cartões de crédito e até criptomoedas. Para projetos maiores, podemos parcelar conforme as etapas de desenvolvimento.",
  },
  {
    question: "Você dá suporte depois que o projeto acaba?",
    answer: "Sim! Ofereço 30 dias de suporte gratuito após o lançamento para qualquer ajuste técnico. Além disso, tenho planos de manutenção mensal para quem deseja atualizações constantes, backups e monitoramento 24h.",
  },
  {
    question: "O sistema vai funcionar perfeitamente no celular?",
    answer: "Com certeza. Utilizo a abordagem 'Mobile First', o que significa que seu site ou app é desenhado primeiro para celulares e depois adaptado para telas maiores. A experiência será fluida e rápida em qualquer dispositivo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-background pt-32 pb-24 overflow-hidden">
      <div className="container-narrow relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Dúvidas Comuns</span>
          <h2 className="mt-4 font-display text-fluid-4xl leading-tight">
            Perguntas <em className="not-italic text-primary">Frequentes</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-fluid-base">
            Tudo o que você precisa saber para tirar sua ideia do papel com segurança e clareza.
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto" delay="[animation-delay:150ms]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/5 bg-card/10 backdrop-blur-md rounded-2xl px-6 transition-all duration-300 hover:bg-card/20 hover:border-primary/20 group overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left group-data-[state=open]:text-primary transition-colors">
                  <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      </div>
    </section>
  );
}
