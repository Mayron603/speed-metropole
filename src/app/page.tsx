import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Target, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/img/speed2.png')"}}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground/80">
              Unidade S.P.E.E.D
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto">
              Special Police Emergency Enforcement Division: A vanguarda da LSPD em perseguições táticas e interceptação de alvos de alto risco em Grande Metrópole.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20">Inscreva-se</Button>
              </Link>
              <Link href="/manuals">
                <Button size="lg" variant="outline" className="transition-transform hover:scale-105 border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-900 bg-transparent">Nossos Manuais</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Sobre a Unidade</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-xl/relaxed text-center mt-4">
            A S.P.E.E.D. é a unidade de elite da LSPD especializada em acompanhamentos táticos. Nossos operadores são mestres na arte da perseguição, utilizando técnicas avançadas para neutralizar ameaças em movimento com precisão e segurança.
          </p>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Executar perseguições e interceptações com excelência tática, garantindo a captura de suspeitos e a proteção da comunidade com o mínimo de risco.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-md">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Disciplina, Precisão, Antecipação e Integridade. Pilares que garantem a sincronia perfeita em nossas operações de alto risco.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-md">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ser a unidade de referência em policiamento veicular tático, estabelecendo o padrão de doutrina e eficiência em todo o estado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="divisions" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">Estrutura de Acompanhamento</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Em uma perseguição, cada viatura tem um papel definido. A sincronia é a chave para o sucesso da operação.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 5V2"/><path d="M12 12v-2"/><path d="m15 15-1-1"/><path d="m9 15 1-1"/><path d="M19 12h-2"/><path d="M7 12H5"/><path d="m18.364 18.364-.707-.707"/><path d="m6.343 18.364.707-.707"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 5.636.707.707"/><circle cx="12" cy="12" r="5"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Viatura Primária</h3>
                <p className="mt-2 text-sm text-muted-foreground">Mantém o contato visual com o alvo, modulando a direção e o comportamento do suspeito para o resto da equipe.</p>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M21 8a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0V8Z"/><path d="m5 18-3 3"/><path d="m19 6 2-2"/><path d="M12 22a8.2 8.2 0 0 1-4-15"/><path d="M12 2a8.2 8.2 0 0 1 4 15"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Viatura Secundária</h3>
                <p className="mt-2 text-sm text-muted-foreground">A viatura mais tática. Antecipa rotas de fuga, cobre ruas laterais e está pronta para assumir a ponta se a primária perder o visual.</p>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M13 10l-4.5 4.5M13 10l4.5 4.5M13 10V3.5a2.5 2.5 0 1 1 5 0V10M3.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M18.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M13 10H3.5"/><path d="M13 10H21"/></svg>
                </div>
                <h3 className="font-headline text-xl font-bold">Viatura Terciária</h3>
                <p className="mt-2 text-sm text-muted-foreground">Fornece suporte, posicionando-se estrategicamente para formar roadblocks e cercos em rotas de fuga prováveis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="join" className="w-full py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">Junte-se a Nós</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Você tem o que é preciso?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Buscamos operadores com raciocínio rápido, controle emocional e habilidade de condução excepcional. Se você prospera sob pressão, seu lugar é na S.P.E.E.D.
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Doutrina de perseguição de ponta</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Viaturas preparadas e de alta performance</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Trabalho em equipe e comunicação tática</li>
              </ul>
              <Link href="/apply">
                <Button size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20">Inicie sua Aplicação</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/img/speed2.png"
                width={600}
                height={400}
                alt="Equipe da SPEED em ação"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
