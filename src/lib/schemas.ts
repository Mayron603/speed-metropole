import { z } from "zod";

export const applyFormSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  age: z.string().min(1, "Idade é obrigatória"),
  discord: z.string().min(3, "Discord é obrigatório"),
  funcional: z.string().min(1, "Funcional é obrigatório"),
  rpExperience: z.string().min(20, "Descreva sua experiência com mais detalhes (mínimo 20 caracteres)."),
  motivation: z.string().min(20, "Descreva sua motivação com mais detalhes (mínimo 20 caracteres)."),
  availability: z.string().min(10, "Descreva sua disponibilidade (mínimo 10 caracteres)."),
  rulesAgreement: z.boolean().refine(val => val, { message: "Você deve concordar com as regras" }),
});
