"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

import { generateContentAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: null,
  errors: {},
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90">
      {pending ? "Gerando conteúdo..." : "Gerar Conteúdo com IA"}
    </Button>
  );
}

export function ContentGeneratorForm() {
  const [state, formAction] = useFormState(generateContentAction, initialState);
  const { toast } = useToast();

   useEffect(() => {
    if (state.message) {
      toast({
        title: state.errors ? "Erro" : "Sucesso",
        description: state.message,
        variant: state.errors ? "destructive" : "default",
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Gerador de Conteúdo</CarTitle>
          <CardDescription>
            Descreva as atividades recentes da S.P.E.E.D para que a IA crie um anúncio ou notícia para o site.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recentActivities">Atividades Recentes e Conquistas</Label>
              <Textarea
                id="recentActivities"
                name="recentActivities"
                placeholder="Ex: 'Na última semana, a equipe Alpha realizou 3 operações de alto risco, resultando na prisão de 12 suspeitos e na apreensão de armas ilegais. O Operador Silva foi promovido por bravura...'"
                rows={8}
              />
              {state?.errors?.recentActivities && (
                <p className="text-sm text-destructive">{state.errors.recentActivities}</p>
              )}
            </div>
            <SubmitButton />
          </CardContent>
        </form>
      </Card>

      <div className="space-y-4">
        <h3 className="font-headline text-2xl">Resultado Gerado</h3>
        {state.data ? (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{state.data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p>{state.data.content}</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="flex items-center justify-center h-64 border-dashed">
            <p className="text-muted-foreground">O conteúdo gerado pela IA aparecerá aqui.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
