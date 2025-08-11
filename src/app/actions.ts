"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { generateDynamicContent } from "@/ai/flows/generate-dynamic-content";

// Schema for AI Content Generator
const generateContentSchema = z.object({
  recentActivities: z
    .string()
    .min(10, { message: "Por favor, descreva as atividades com mais detalhes." }),
});

interface GenerateContentState {
  message?: string | null;
  errors?: {
    recentActivities?: string[];
  };
  data?: {
    title: string;
    content: string;
  } | null;
}

export async function generateContentAction(
  prevState: GenerateContentState,
  formData: FormData
): Promise<GenerateContentState> {
  const validatedFields = generateContentSchema.safeParse({
    recentActivities: formData.get("recentActivities"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateDynamicContent({
      recentActivities: validatedFields.data.recentActivities,
    });
    revalidatePath("/admin/content-generator");
    return {
      message: "Conteúdo gerado com sucesso!",
      data: result,
    };
  } catch (error) {
    return {
      message: "Falha na geração de conteúdo. Tente novamente.",
    };
  }
}

// Schema for Application Form
const applyFormSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  age: z.string().min(1, "Idade é obrigatória"),
  discord: z.string().min(3, "Discord é obrigatório"),
  steamHex: z.string().min(10, "Steam HEX é obrigatório"),
  rpExperience: z.string().min(20, "Descreva sua experiência com mais detalhes"),
  motivation: z.string().min(20, "Descreva sua motivação com mais detalhes"),
  availability: z.string().min(10, "Descreva sua disponibilidade"),
  rulesAgreement: z.boolean().refine(val => val, { message: "Você deve concordar com as regras" }),
});

interface ApplyFormState {
  message?: string | null;
  errors?: {
    fullName?: string[];
    age?: string[];
    discord?: string[];
    steamHex?: string[];
    rpExperience?: string[];
    motivation?: string[];
    availability?: string[];
    rulesAgreement?: string[];
  };
}

export async function applyAction(
  prevState: ApplyFormState,
  formData: FormData
): Promise<ApplyFormState> {
  const validatedFields = applyFormSchema.safeParse({
    fullName: formData.get("fullName"),
    age: formData.get("age"),
    discord: formData.get("discord"),
    steamHex: formData.get("steamHex"),
    rpExperience: formData.get("rpExperience"),
    motivation: formData.get("motivation"),
    availability: formData.get("availability"),
    rulesAgreement: formData.get("rulesAgreement") === "on",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("Nova Aplicação Recebida:", validatedFields.data);

  return { message: "Aplicação enviada com sucesso! Entraremos em contato em breve." };
}
