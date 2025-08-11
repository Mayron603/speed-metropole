import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginButton } from "@/components/login-button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Acesso Restrito</CardTitle>
          <CardDescription>
            Use o Discord para acessar o painel de membro.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginButton />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" variant="outline">
            Entrar com Email
          </Button>
        </CardContent>
        <CardContent className="mt-0 text-center text-sm">
          Não tem uma conta?{" "}
          <Link href="/apply" className="underline text-primary">
            Inscreva-se
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
