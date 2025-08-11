import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-background to-secondary">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Unidade S.P.E.E.D
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Special Police Emergency Enforcement Division: A elite tática da LSPD, pronta para as missões mais críticas de Grande Metrópole.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vacancies">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Ver Vagas Abertas</Button>
              </Link>
              <Link href="/manuals">
                <Button size="lg" variant="outline">Nossos Manuais</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Sobre a Unidade</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mt-4">
            A SPEED é a resposta da LSPD para situações de alto risco. Nossos operadores são treinados para excelência em táticas, negociação e execução de mandados.
          </p>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proteger e servir a comunidade de Grande Metrópole, neutralizando ameaças com precisão, profissionalismo e o mínimo de força necessária.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-md">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Honra, Coragem, Compromisso e Integridade. Estes são os pilares que guiam cada uma de nossas ações, dentro e fora de serviço.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-md">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ser a referência em policiamento tático, inovando em treinamento e tecnologia para garantir a paz e a segurança da cidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="divisions" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">Nossas Divisões</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estruturados para a máxima eficiência, cada divisão tem um papel crucial no sucesso de nossas operações.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="m15 18-6-6 6-6"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Oficiais de Campo</h3>
                <p className="mt-2 text-sm text-muted-foreground">A linha de frente, responsáveis pela execução direta das operações táticas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Operadores Táticos</h3>
                <p className="mt-2 text-sm text-muted-foreground">Especialistas em armamento pesado, táticas de invasão e resgate de reféns.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/><path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Suporte e Inteligência</h3>
                <p className="mt-2 text-sm text-muted-foreground">A espinha dorsal da unidade, provendo dados, logística e suporte técnico.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="join" className="w-full py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-semibold">Junte-se a Nós</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Você tem o que é preciso?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Buscamos indivíduos excepcionais para se juntarem à elite da LSPD. Se você é dedicado, resiliente e busca desafios, seu lugar pode ser aqui.
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Treinamento de ponta</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Equipamento de última geração</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Espírito de equipe inabalável</li>
              </ul>
              <Link href="/apply">
                <Button size="lg" className="mt-4">Inicie sua Aplicação</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="SPEED Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                data-ai-hint="police team swat"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
