import { z } from "zod";

export const applyFormSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  age: z.string().min(1, "Idade é obrigatória"),
  discord: z.string().min(3, "Discord é obrigatório"),
  funcional: z.string().min(1, "Funcional é obrigatório"),
  question1: z.string().min(20, "Descreva sua motivação com mais detalhes (mínimo 20 caracteres)."),
  question2: z.string().min(10, "Descreva sua disponibilidade (mínimo 10 caracteres)."),
  question3: z.string().min(15, "A resposta deve ter pelo menos 15 caracteres."),
  question4: z.string().min(15, "A resposta deve ter pelo menos 15 caracteres."),
  question5: z.string().min(15, "A resposta deve ter pelo menos 15 caracteres."),
  rulesAgreement: z.boolean().refine(val => val, { message: "Você deve concordar com as regras" }),
});
