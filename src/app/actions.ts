"use server";

import { revalidatePath } from "next/cache";
import { applyFormSchema } from "@/lib/schemas";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface ApplyFormState {
  message: string;
  errors?: {
    fullName?: string[];
    age?: string[];
    discord?: string[];
    funcional?: string[];
    rpExperience?: string[];
    motivation?: string[];
    availability?: string[];
    rulesAgreement?: string[];
    _form?: string[];
  };
  success: boolean;
}

export async function applyAction(
  prevState: ApplyFormState,
  formData: FormData
): Promise<ApplyFormState> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Discord webhook URL not configured.");
    return { 
      message: "Erro de servidor: A URL do webhook do Discord não está configurada nas variáveis de ambiente.",
      success: false,
    };
  }
  
  const validatedFields = applyFormSchema.safeParse({
    fullName: formData.get("fullName"),
    age: formData.get("age"),
    discord: formData.get("discord"),
    funcional: formData.get("funcional"),
    rpExperience: formData.get("rpExperience"),
    motivation: formData.get("motivation"),
    availability: formData.get("availability"),
    rulesAgreement: formData.get("rulesAgreement") === "true",
  });

  if (!validatedFields.success) {
    return {
      message: "Falha na validação. Por favor, verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { fullName, age, discord, funcional, rpExperience, motivation, availability } = validatedFields.data;
  
  const session = await getServerSession(authOptions);
  const avatarURL = session?.user?.image;

  const discordPayload = {
    username: "S.P.E.E.D. Recrutamento",
    avatar_url: "https://cdn.discordapp.com/attachments/1110324893750403072/1404506157560889455/logo.png",
    embeds: [
      {
        title: `Nova Inscrição - ${fullName}`,
        thumbnail: {
          url: avatarURL || "https://cdn.discordapp.com/embed/avatars/0.png", // Foto do candidato
        },
        color: 0x2f3136,
        fields: [
          { name: "Nome", value: fullName, inline: true },
          { name: "Idade", value: `${age} anos`, inline: true },
          { name: "Funcional", value: funcional, inline: true },
          { name: "Discord", value: discord, inline: true },
  
          { name: "1. Experiência com RP", value: `\`\`\`${rpExperience || "Não informado"}\`\`\`` },
          { name: "2. Motivação", value: `\`\`\`${motivation || "Não informado"}\`\`\`` },
          { name: "3. Disponibilidade", value: `\`\`\`${availability || "Não informado"}\`\`\`` },
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
      return { 
        message: "Houve um erro ao enviar sua aplicação para o Discord.",
        success: false,
      };
    }
  } catch (error) {
    console.error("Failed to send application to Discord:", error);
    return { 
      message: "Houve um erro de conexão ao enviar sua aplicação.",
      success: false,
    };
  }

  revalidatePath("/apply");

  return { 
    message: "Aplicação enviada com sucesso! Entraremos em contato em breve.",
    success: true,
  };
}

import { z } from "zod";
import { generateDynamicContent } from '@/ai/flows/generate-dynamic-content';

const generateContentFormSchema = z.object({
  recentActivities: z.string().min(10, "Descreva com mais detalhes as atividades recentes."),
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
