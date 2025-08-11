import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Inscreva-se</CardTitle>
          <CardDescription>
            Crie sua conta para aplicar para a S.P.E.E.D.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="password-confirm">Confirmar Senha</Label>
            <Input id="password-confirm" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Criar Conta
          </Button>
        </CardContent>
         <CardContent className="mt-0 text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/login" className="underline text-primary">
            Login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
