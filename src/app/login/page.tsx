import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "@/components/login-button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-24 px-4">
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Acesso Restrito</CardTitle>
          <CardDescription className="pt-2">
            O acesso ao painel de membros é exclusivo para operadores e é feito através do Discord.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginButton />
        </CardContent>
        <CardContent className="mt-2 text-center text-sm">
          Ainda não é um membro?{" "}
          <Link href="/apply" className="underline text-primary hover:text-primary/80">
            Inscreva-se
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
