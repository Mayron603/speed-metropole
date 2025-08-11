'use server';

/**
 * @fileOverview AI-powered tool that automatically generates engaging content (news, announcements, etc.) for the website based on recent SPEED activities and achievements.
 *
 * - generateDynamicContent - A function that handles the dynamic content generation process.
 * - GenerateDynamicContentInput - The input type for the generateDynamicContent function.
 * - GenerateDynamicContentOutput - The return type for the generateDynamicContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDynamicContentInputSchema = z.object({
  recentActivities: z
    .string()
    .describe(
      'A description of recent activities and achievements of the SPEED unit.'
    ),
});
export type GenerateDynamicContentInput = z.infer<typeof GenerateDynamicContentInputSchema>;

const GenerateDynamicContentOutputSchema = z.object({
  title: z.string().describe('The title of the generated content.'),
  content: z.string().describe('The generated content for the website.'),
});
export type GenerateDynamicContentOutput = z.infer<typeof GenerateDynamicContentOutputSchema>;

export async function generateDynamicContent(input: GenerateDynamicContentInput): Promise<GenerateDynamicContentOutput> {
  return generateDynamicContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDynamicContentPrompt',
  input: {schema: GenerateDynamicContentInputSchema},
  output: {schema: GenerateDynamicContentOutputSchema},
  prompt: `You are a content creator for the SPEED Online Hub website.

  Generate engaging content (news, announcements, etc.) for the website based on recent SPEED activities and achievements.
  The tone should be professional, informative, and engaging.

  Recent Activities and Achievements:
  {{recentActivities}}

  Please generate a title and content for a news article or announcement based on the provided information.
  `,
});

const generateDynamicContentFlow = ai.defineFlow(
  {
    name: 'generateDynamicContentFlow',
    inputSchema: GenerateDynamicContentInputSchema,
    outputSchema: GenerateDynamicContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
