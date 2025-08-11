"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { applyAction, applyFormSchema } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


type ApplyFormValues = z.infer<typeof applyFormSchema>;

export function ApplyForm() {
  const { toast } = useToast();
  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      age: "",
      discord: "",
      funcional: "",
      rpExperience: "",
      motivation: "",
      availability: "",
      rulesAgreement: false,
    },
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset();
      toast({
        title: "Sucesso!",
        description: "Aplicação enviada com sucesso! Entraremos em contato em breve.",
      });
    }
  }, [isSubmitSuccessful, form, toast]);


  const onSubmit = async (values: ApplyFormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const result = await applyAction(
        { message: "", success: false },
        formData
    );

    if (!result.success) {
      toast({
        title: "Erro na Aplicação",
        description: result.message || "Por favor, verifique os campos do formulário.",
        variant: "destructive",
      });
      if (result.errors) {
        Object.entries(result.errors).forEach(([key, value]) => {
          if (key !== '_form') {
            form.setError(key as keyof ApplyFormValues, {
              type: "server",
              message: value?.join(", "),
            });
          }
        });
      }
    }
  };


  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-3xl">Formulário de Inscrição</CardTitle>
        <CardDescription>Preencha os campos abaixo para iniciar seu processo seletivo na S.P.E.E.D.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo (Personagem)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idade (Real)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="discord"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Discord (user#1234)</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="funcional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funcional</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu número funcional" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="rpExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experiência com Roleplay</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva suas experiências anteriores em servidores de RP, tempo de jogo, facções que participou, etc." {...field} />
                  </FormControl>
                  <FormDescription>Mínimo 20 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Por que você quer entrar na S.P.E.E.D?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="O que te motiva a se juntar a uma unidade de elite? Quais são seus objetivos?" {...field} />
                  </FormControl>
                   <FormDescription>Mínimo 20 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disponibilidade de Horário</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Informe os dias e horários que você costuma estar disponível para jogar." {...field} />
                  </FormControl>
                   <FormDescription>Mínimo 10 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rulesAgreement"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0">
                   <FormControl>
                     <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                  </FormControl>
                  <div className="grid gap-1.5 leading-none">
                    <FormLabel>
                      Eu li e concordo com todas as regras e manuais da S.P.E.E.D e da LSPD.
                    </FormLabel>
                    <FormDescription>
                      Você entende que o não cumprimento das regras resultará em punição.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Enviando Aplicação..." : "Enviar Aplicação"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
