"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { applyAction } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const initialState = {
  message: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Enviando Aplicação..." : "Enviar Aplicação"}
    </Button>
  );
}

export function ApplyForm() {
  const [state, formAction] = useFormState(applyAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          title: "Erro na Aplicação",
          description: state.message || "Por favor, verifique os campos em vermelho.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        // Reset the form on successful submission
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Formulário de Inscrição</CardTitle>
        <CardDescription>Preencha os campos abaixo para iniciar seu processo seletivo na S.P.E.E.D.</CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Nome Completo (Personagem)</Label>
              <Input id="fullName" name="fullName" required />
              {state.errors?.fullName && <p className="text-sm text-destructive">{state.errors.fullName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Idade (Real)</Label>
              <Input id="age" name="age" type="number" required />
              {state.errors?.age && <p className="text-sm text-destructive">{state.errors.age}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="discord">Seu Discord (user#1234)</Label>
              <Input id="discord" name="discord" required />
              {state.errors?.discord && <p className="text-sm text-destructive">{state.errors.discord}</p>}
            </div>
             <div className="space-y-2">
              <Label htmlFor="funcional">Funcional</Label>
              <Input id="funcional" name="funcional" placeholder="Seu número funcional" required />
              {state.errors?.funcional && <p className="text-sm text-destructive">{state.errors.funcional}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rpExperience">Experiência com Roleplay</Label>
            <Textarea id="rpExperience" name="rpExperience" placeholder="Descreva suas experiências anteriores em servidores de RP, tempo de jogo, facções que participou, etc." required />
            {state.errors?.rpExperience && <p className="text-sm text-destructive">{state.errors.rpExperience}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motivation">Por que você quer entrar na S.P.E.E.D?</Label>
            <Textarea id="motivation" name="motivation" placeholder="O que te motiva a se juntar a uma unidade de elite? Quais são seus objetivos?" required />
             {state.errors?.motivation && <p className="text-sm text-destructive">{state.errors.motivation}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="availability">Disponibilidade de Horário</Label>
            <Textarea id="availability" name="availability" placeholder="Informe os dias e horários que você costuma estar disponível para jogar." required />
            {state.errors?.availability && <p className="text-sm text-destructive">{state.errors.availability}</p>}
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="rulesAgreement" name="rulesAgreement" />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="rulesAgreement" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Eu li e concordo com todas as regras e manuais da S.P.E.E.D e da LSPD.
              </label>
              <p className="text-sm text-muted-foreground">
                Você entende que o não cumprimento das regras resultará em punição.
              </p>
               {state.errors?.rulesAgreement && <p className="text-sm text-destructive">{state.errors.rulesAgreement}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
