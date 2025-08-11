"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Mail, Hash, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const roleMapping: { [key: string]: string } = {
  "1394081883498745886": "SubComandante Speed",
  "1383912650035036172": "Cabo",
};

function getUserRole(userRoles: string[] = []): string {
  for (const roleId of userRoles) {
    if (roleMapping[roleId]) {
      return roleMapping[roleId];
    }
  }
  return "Operador S.P.E.E.D.";
}


export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="container mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="space-y-2">
                 <Skeleton className="h-8 w-48" />
                 <Skeleton className="h-6 w-64" />
            </div>
            <div className="w-full space-y-4 pt-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated" || !session?.user) {
    return (
      <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-3xl">Acesso Negado</h1>
        <p className="mt-4 text-muted-foreground">Você precisa estar logado para ver seu painel.</p>
         <Button asChild className="mt-6">
            <Link href="/login">Ir para o Login</Link>
        </Button>
      </div>
    );
  }

  const { user } = session;
  const userWithDetails = user as any;
  const nickname = userWithDetails.nickname || user.name || "Operador";
  const userRole = getUserRole(userWithDetails.roles);

  let funcional = "Não definido";
  let fullName = nickname;

  const match = nickname.match(/^\[(\d+)\]\s*-\s*(.*)$/);
  if (match) {
    funcional = match[1];
    fullName = match[2];
  }

  return (
    <div className="container mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-muted/30 p-8 flex flex-col items-center text-center gap-4">
                <Avatar className="h-32 w-32 border-4 border-background shadow-md">
                    <AvatarImage src={user.image ?? undefined} alt={fullName} />
                    <AvatarFallback>{fullName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <CardTitle className="font-headline text-3xl">{fullName}</CardTitle>
                    <CardDescription className="text-lg text-primary font-semibold">{userRole}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                 <h3 className="font-headline text-xl mb-4 text-center">Suas Informações</h3>
                 <div className="flex items-center gap-4 p-3 rounded-md bg-secondary/50">
                    <Shield className="h-6 w-6 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Funcional</p>
                        <p className="font-semibold text-lg">{funcional}</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4 p-3 rounded-md bg-secondary/50">
                    <User className="h-6 w-6 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Nome de Usuário Discord</p>
                        <p className="font-semibold text-lg">{user.name}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-md bg-secondary/50">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-lg">{user.email}</p>
                    </div>
                </div>
                 {/* Admin-only Section */}
                 {funcional === '729' && (
                  <div className="pt-4 mt-4 border-t">
                      <h3 className="font-headline text-xl mb-4 text-center text-destructive">Painel do Administrador</h3>
                      <Button asChild variant="destructive" className="w-full">
                          <Link href="/admin/content-generator">Gerador de Conteúdo IA</Link>
                      </Button>
                  </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
