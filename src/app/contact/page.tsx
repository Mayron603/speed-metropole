import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Radio, MessageSquare, User } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Contato
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Meios de comunicação oficiais para entrar em contato com o comando da S.P.E.E.D.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-md">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="font-headline">Discord Oficial</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Para assuntos gerais, recrutamento e comunicação com a comunidade, nosso Discord é o canal principal.
            </p>
            <a href="https://discord.gg/E8jpPacd4f" target="_blank" rel="noopener noreferrer" className="text-primary font-bold mt-2 inline-block hover:underline">
              Junte-se ao nosso Discord
            </a>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
             <div className="p-3 bg-primary/10 rounded-md">
              <Radio className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="font-headline">Comunicação In-Game</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Para emergências e assuntos operacionais dentro da cidade, utilize o rádio na frequência 911.
            </p>
            <p className="text-primary font-bold mt-2">
              Frequência: 911
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4">
             <div className="p-3 bg-primary/10 rounded-md">
              <User className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="font-headline">Contato com o Comando</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Para assuntos urgentes ou que necessitem da atenção direta do comando, entre em contato com o responsável.
            </p>
             <p className="text-primary font-bold mt-2">
              Discord: mayron.x
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
