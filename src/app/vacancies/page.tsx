import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const vacancies = [
  {
    id: "oficial-campo",
    title: "Oficial de Campo",
    description: "Responsável pela execução de patrulhas de alto risco, cumprimento de mandados e primeira resposta em situações críticas. Exige excelente forma física e mental.",
    requirements: [
      "Mínimo de 30 dias na LSPD.",
      "Histórico exemplar, sem registros negativos.",
      "Aprovação no teste de aptidão física e psicológica.",
      "Conhecimento profundo dos códigos e procedimentos.",
    ],
  },
  {
    id: "operador-tatico",
    title: "Operador Tático",
    description: "Especialista em táticas avançadas, armamento pesado e operações de resgate. Atua em cenários de extrema complexidade, como sequestros e ataques terroristas.",
    requirements: [
      "Experiência prévia como Oficial de Campo na SPEED.",
      "Certificação em armamentos específicos.",
      "Treinamento avançado em CQB (Close Quarters Battle).",
      "Capacidade de tomar decisões sob alta pressão.",
    ],
  },
  {
    id: "suporte-inteligencia",
    title: "Analista de Inteligência e Suporte",
    description: "O cérebro por trás das operações. Coleta e analisa informações, gerencia a comunicação e fornece suporte logístico e tecnológico para as equipes em campo.",
    requirements: [
      "Habilidades analíticas e de resolução de problemas.",
      "Proficiência em sistemas de vigilância e comunicação.",
      "Discrição e capacidade de lidar com informações sensíveis.",
      "Experiência em planejamento de operações.",
    ],
  },
];

export default function VacanciesPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Vagas Abertas na S.P.E.E.D
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Faça parte da elite. Buscamos os melhores para as missões mais difíceis. Veja as posições disponíveis e junte-se a nós.
        </p>
      </div>

      <div className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          {vacancies.map((vacancy) => (
            <AccordionItem value={vacancy.id} key={vacancy.id} className="border-b">
              <AccordionTrigger className="text-left hover:no-underline">
                <h3 className="font-headline text-2xl font-semibold">{vacancy.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <p className="text-muted-foreground">{vacancy.description}</p>
                <h4 className="font-headline font-semibold mt-4 mb-2">Requisitos:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {vacancy.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <Link href="/apply">
                  <Button className="mt-6 bg-accent hover:bg-accent/90">
                    Inscrever-se para esta vaga
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
