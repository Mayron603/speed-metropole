import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const members = [
  {
    name: "HOBBS PARKER",
    functional: "729",
    rank: "Comandante",
    status: "ATIVO",
  },
  {
    name: "TINGA SOUZA",
    functional: "896",
    rank: "Subcomandante",
    status: "ATIVO",
  },
  {
    name: "ALBERT PATRICK",
    functional: "797",
    rank: "Cabo",
    status: "ATIVO",
  },
];

export default function EfetivoPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Efetivo da S.P.E.E.D
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Relação de todos os operadores da unidade, suas patentes e status operacional.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Funcional</TableHead>
                <TableHead>Patente</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.functional}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.functional}</TableCell>
                  <TableCell>{member.rank}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant={member.status === 'ATIVO' ? 'default' : 'destructive'} 
                           className={member.status === 'ATIVO' ? 'bg-green-500' : 'bg-red-500'}>
                      {member.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
