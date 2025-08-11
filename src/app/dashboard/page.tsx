import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Newspaper } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Painel de Controle
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Bem-vindo, Operador. Aqui você pode gerenciar suas informações e acessar ferramentas administrativas.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="font-headline">Status da Aplicação</CardTitle>
            <CardDescription>Verifique o andamento do seu processo seletivo.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Status:</strong> <span className="text-primary font-semibold">Em Análise</span></p>
              <p className="text-sm text-muted-foreground">Sua aplicação foi recebida e está sendo analisada pelo comando. Você será notificado via Discord sobre os próximos passos.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Newspaper className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="font-headline">Gerador de Conteúdo IA</CardTitle>
            <CardDescription>Ferramenta administrativa para criar notícias e anúncios.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">Use a inteligência artificial para gerar conteúdo dinâmico para o site com base nas atividades recentes da unidade.</p>
             <Link href="/admin/content-generator">
                <Button variant="outline" className="mt-4">
                  Acessar Ferramenta
                </Button>
             </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
