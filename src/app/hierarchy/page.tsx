import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, Star, ChevronDown, Anchor } from "lucide-react";

const hierarchy = [
  {
    rank: "Comandante",
    icon: <Star className="h-6 w-6 text-amber-400" />,
    members: [
      { name: "Hobbs Parker", id: "729" },
    ],
  },
  {
    rank: "Subcomandante",
    icon: <Star className="h-6 w-6 text-slate-400" />,
    members: [
      { name: "Tinga Souza", id: "896" },
    ],
  },
  {
    rank: "Capitão",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
  {
    rank: "1º Tenente",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
  {
    rank: "2º Tenente",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
  {
    rank: "1º Sargento",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
  {
    rank: "2º Sargento",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
    {
    rank: "3º Sargento",
    icon: <ChevronDown className="h-6 w-6" />,
    members: [],
  },
  {
    rank: "Cabo",
    icon: <Anchor className="h-6 w-6" />,
    members: [
      { name: "ALBERT PATRICK", id: "797" },
    ],
  },
];


export default function HierarchyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Hierarquia da S.P.E.E.D
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          A estrutura de comando que garante nossa eficiência operacional. Conheça os operadores que lideram a vanguarda da LSPD.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {hierarchy.map((level) => (
          <Card key={level.rank} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 bg-muted/50 p-4">
              <div className="p-2 bg-primary/10 rounded-md">
                {level.icon}
              </div>
              <CardTitle className="font-headline text-xl">{level.rank}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {level.members.length > 0 ? (
                <ul className="space-y-4">
                  {level.members.map((member) => (
                    <li key={member.id} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png?text=${member.name.charAt(0)}`} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{member.name}</p>
                        <p className="text-sm text-muted-foreground">Funcional: {member.id}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground italic">Nenhum membro nesta patente.</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
