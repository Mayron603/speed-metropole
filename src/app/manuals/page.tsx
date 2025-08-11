import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, Pyramid, ShieldQuestion } from "lucide-react";

export default function ManualsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Manuais e Documentação
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Conhecimento é a base da excelência. Acesse nossos manuais para entender os procedimentos, hierarquia e leis que regem nossas operações.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="procedures" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="procedures"><ShieldQuestion className="mr-2" />Procedimentos</TabsTrigger>
            <TabsTrigger value="hierarchy"><Pyramid className="mr-2" />Hierarquia</TabsTrigger>
            <TabsTrigger value="penal-code"><Gavel className="mr-2" />Código Penal</TabsTrigger>
          </TabsList>

          <TabsContent value="procedures">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Procedimentos Operacionais Padrão</CardTitle>
                <CardDescription>Diretrizes para todas as ações táticas da unidade.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold font-headline">Abordagem de Veículos de Alto Risco</h3>
                <p className="text-sm text-muted-foreground">Técnica de bloqueio em V (V-Block), comunicação clara, designação de papéis para cada oficial (Comando, Contenção, Busca). Prioridade é a segurança dos oficiais e a rendição segura dos suspeitos.</p>
                <h3 className="font-semibold font-headline">Entrada Tática em Estruturas (CQB)</h3>
                <p className="text-sm text-muted-foreground">Utilização de "stack" na porta, entrada rápida e dominadora, varredura de cômodos por setores, comunicação por gestos e verbal curta. Uso de flashbangs e outras ferramentas não-letais quando aplicável.</p>
                 <h3 className="font-semibold font-headline">Resgate de Reféns</h3>
                <p className="text-sm text-muted-foreground">Estabelecimento de perímetro, equipe de negociação, planejamento de múltiplos pontos de entrada. A ação tática é o último recurso, priorizando a vida do refém.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hierarchy">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Hierarquia e Comando</CardTitle>
                <CardDescription>A estrutura de comando da S.P.E.E.D.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Comandante da Unidade:</strong> Responsável geral pela S.P.E.E.D, reportando-se ao alto comando da LSPD.</li>
                    <li><strong>Líder de Equipe Tática:</strong> Comanda uma equipe específica (Alpha, Bravo, etc.) durante as operações.</li>
                    <li><strong>Operador Sênior:</strong> Membro experiente que auxilia o líder e orienta os operadores mais novos.</li>
                    <li><strong>Operador Tático:</strong> O especialista em táticas e armamento.</li>
                    <li><strong>Oficial de Campo:</strong> O membro da linha de frente, em treinamento para se tornar um operador pleno.</li>
                 </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="penal-code">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Código Penal (Resumo Relevante)</CardTitle>
                <CardDescription>Artigos frequentemente aplicados nas operações da S.P.E.E.D.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <h3 className="font-semibold font-headline">Uso da Força</h3>
                 <p className="text-sm text-muted-foreground">O uso da força deve ser progressivo e proporcional à ameaça. Força letal é justificada apenas em caso de risco iminente à vida de um oficial ou civil.</p>
                 <h3 className="font-semibold font-headline">Sequestro e Cárcere Privado</h3>
                 <p className="text-sm text-muted-foreground">Crime inafiançável. A intervenção da S.P.E.E.D é mandatória. A prioridade é a preservação da vida do refém.</p>
                  <h3 className="font-semibold font-headline">Terrorismo</h3>
                 <p className="text-sm text-muted-foreground">Ações que visam causar pânico generalizado. A S.P.E.E.D tem autoridade total para neutralizar a ameaça por qualquer meio necessário para proteger a população.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
