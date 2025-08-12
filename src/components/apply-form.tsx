"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { applyAction } from "@/app/actions";
import { applyFormSchema } from "@/lib/schemas";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const { toast } = useToast();
  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      age: "",
      discord: "",
      funcional: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      rulesAgreement: false,
    },
  });

  useEffect(() => {
    if (session?.user) {
      const nickname = (session.user as any).nickname || "";
      const discordUser = session.user.name ? `${session.user.name}` : "";
      
      form.setValue("discord", discordUser);
      
      const match = nickname.match(/^\[(\d+)\]\s*-\s*(.*)$/);
      if (match) {
        const funcional = match[1];
        const fullName = match[2];
        form.setValue("funcional", funcional);
        form.setValue("fullName", fullName);
      } else if (nickname) {
        form.setValue("fullName", nickname);
      }
    }
  }, [session, form]);
  

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
            <div className="space-y-4 border-b pb-6">
                <h3 className="font-headline text-xl">Informações Básicas</h3>
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
                        <Input {...field} readOnly={!!session}/>
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
            </div>

            <div className="space-y-4 pt-4">
                <h3 className="font-headline text-xl">Questionário</h3>
                <FormField
                control={form.control}
                name="question1"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>1. O que te motiva a se juntar a uma unidade de elite como a S.P.E.E.D? Quais são seus objetivos?</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                    <FormDescription>Mínimo 20 caracteres.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="question2"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>2. Informe os dias e horários que você costuma estar disponível para jogar.</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                    <FormDescription>Mínimo 10 caracteres.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                 <FormField
                control={form.control}
                name="question3"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>3. Qual a função da viatura SECUNDÁRIA em um acompanhamento tático, segundo nossa doutrina?</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                     <FormDescription>Consulte os manuais para responder.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                 <FormField
                control={form.control}
                name="question4"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>4. Ao ouvir "Código 5" no rádio da polícia, qual ação imediata um operador deve tomar?</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                     <FormDescription>Consulte os manuais para responder.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                 <FormField
                control={form.control}
                name="question5"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>5. Explique para que serve a manobra "Box Tático" e em que tipo de situação ela é mais eficaz.</FormLabel>
                    <FormControl>
                        <Textarea {...field} />
                    </FormControl>
                    <FormDescription>Consulte os manuais para responder.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="rulesAgreement"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-3 space-y-0 pt-4">
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
