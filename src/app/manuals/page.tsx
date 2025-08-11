import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, ShieldAlert, Siren } from "lucide-react";

export default function ManualsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Doutrina Operacional
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          O conhecimento da nossa doutrina é o que separa uma perseguição caótica de um acompanhamento tático preciso. Estude, entenda e aplique.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="pursuit" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="pursuit"><Car className="mr-2" />Táticas de Perseguição</TabsTrigger>
            <TabsTrigger value="code5"><Siren className="mr-2" />Código 5 (Uso de Força)</TabsTrigger>
            <TabsTrigger value="general"><ShieldAlert className="mr-2" />Conduta Geral</TabsTrigger>
          </TabsList>

          <TabsContent value="pursuit">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Acompanhamento Tático Veicular</CardTitle>
                <CardDescription>A estrutura de comando e os papéis durante uma perseguição.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold font-headline">Viatura Primária</h3>
                <p className="text-sm text-muted-foreground">Sua única função é manter contato visual com o alvo. É responsável pela comunicação clara e precisa da localização e comportamento do suspeito. Deve evitar antecipações e manter distância segura para reagir a freadas bruscas.</p>
                <h3 className="font-semibold font-headline">Viatura Secundária</h3>
                <p className="text-sm text-muted-foreground">A peça chave da perseguição. Sua missão é prever as rotas de fuga, utilizando becos e vielas para se adiantar, não para bloquear, mas para garantir que o visual nunca seja perdido. Assume a primária instantaneamente se necessário. Não segue a primária em locais apertados.</p>
                 <h3 className="font-semibold font-headline">Viatura Terciária</h3>
                <p className="text-sm text-muted-foreground">Posiciona-se para executar manobras de contenção, como roadblocks, nas saídas mais prováveis. A obstrução total de uma via só é permitida após 15 minutos de perseguição ou sob autorização de um superior.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code5">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Protocolo para Código 5</CardTitle>
                <CardDescription>O uso de força letal é um recurso extremo, autorizado apenas em circunstâncias específicas.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
                    <li><strong>Disparos contra a Guarnição:</strong> Ameaça direta à vida dos oficiais. A resposta deve ser imediata e controlada.</li>
                    <li><strong>Situação de Resgate:</strong> Quando um suspeito em fuga abandona seu veículo e entra em outro, não envolvido inicialmente, para continuar a evasão (se o segundo veículo for importado).</li>
                    <li><strong>Autorização Superior:</strong> Um comando pode autorizar o Código 5 baseado em informações de inteligência que justifiquem a ação (ex: suspeito envolvido em tiroteio prévio).</li>
                    <li><strong>Regra de Engajamento:</strong> Uma vez autorizado, apenas a viatura primária (ou unidade aérea, se disponível e mais capacitada) deve efetuar os disparos para garantir precisão e evitar fogo cruzado descontrolado.</li>
                 </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Regras e Conduta Geral</CardTitle>
                <CardDescription>Princípios que regem todas as nossas ações.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <h3 className="font-semibold font-headline">Manobra PIT (Pursuit Intervention Technique)</h3>
                 <p className="text-sm text-muted-foreground">A manobra PIT é estritamente proibida em qualquer circunstância. A segurança e o controle da situação são prioridades. Nossa doutrina se baseia em tática, não em força bruta.</p>
                 <h3 className="font-semibold font-headline">Prioridade de Viaturas</h3>
                 <p className="text-sm text-muted-foreground">Em situações que exigem um número elevado de viaturas, as unidades da S.P.E.E.D. sempre terão prioridade para ocupar as posições primária e secundária, garantindo que a doutrina de perseguição seja aplicada com expertise.</p>
                  <h3 className="font-semibold font-headline">Comunicação</h3>
                 <p className="text-sm text-muted-foreground">A comunicação deve ser clara, concisa e objetiva. Utilize os códigos padrão e evite modulações desnecessárias. Apenas a viatura primária (ou a secundária, se tiver o visual) deve modular.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
