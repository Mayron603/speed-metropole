"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

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

  const { fullName, age, discord, steamHex, rpExperience, motivation, availability } = validatedFields.data;
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Discord webhook URL not configured.");
    return { message: "Erro de servidor: O webhook do Discord não está configurado." };
  }

  const discordPayload = {
    username: "S.P.E.E.D. Recrutamento",
    avatar_url: "https://i.imgur.com/gG4gU3R.png",
    embeds: [
      {
        title: `Nova Inscrição: ${fullName}`,
        color: 2712319, // SPEED Blue color
        fields: [
          { name: "Nome Completo", value: fullName, inline: true },
          { name: "Idade", value: age, inline: true },
          { name: "Discord", value: discord, inline: true },
          { name: "Steam HEX", value: steamHex, inline: true },
          { name: "Experiência com RP", value: rpExperience },
          { name: "Motivação", value: motivation },
          { name: "Disponibilidade", value: availability },
        ],
        footer: {
          text: `Inscrição recebida em: ${new Date().toLocaleString("pt-BR")}`,
        },
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Discord webhook failed with status: ${response.status}`, errorBody);
      return { message: "Houve um erro ao enviar sua aplicação para o Discord." };
    }
  } catch (error) {
    console.error("Failed to send application to Discord:", error);
    return { message: "Houve um erro de conexão ao enviar sua aplicação." };
  }

  console.log("Nova Aplicação Recebida e enviada para o Discord:", validatedFields.data);

  revalidatePath("/apply");

  return { message: "Aplicação enviada com sucesso! Entraremos em contato em breve." };
}

const generateContentFormSchema = z.object({
  recentActivities: z.string().min(10, "Descreva com mais detalhes as atividades recentes."),
});


import { generateDynamicContent } from '@/ai/flows/generate-dynamic-content';

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
  const validatedFields = generateContentFormSchema.safeParse({
    recentActivities: formData.get("recentActivities"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await generateDynamicContent({ recentActivities: validatedFields.data.recentActivities });
    return {
      message: "Conteúdo gerado com sucesso!",
      errors: {},
      data: result,
    }
  } catch (error) {
    console.error("AI content generation failed:", error);
    return {
      message: "Ocorreu um erro ao gerar o conteúdo com a IA.",
      errors: {},
      data: null,
    }
  }
}