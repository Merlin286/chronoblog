
'use server';
/**
 * @fileOverview A flow to summarize a blog post.
 *
 * - summarizePost - A function that takes post content and returns a summary.
 * - SummarizePostInput - The input type for the summarizePost function.
 * - SummarizePostOutput - The return type for the summarizePost function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SummarizePostInputSchema = z.object({
  content: z.string().describe('The content of the blog post to summarize.'),
});
export type SummarizePostInput = z.infer<typeof SummarizePostInputSchema>;


const SummarizePostOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the blog post, about 2-3 sentences long.'),
});
export type SummarizePostOutput = z.infer<typeof SummarizePostOutputSchema>;


export async function summarizePost(input: SummarizePostInput): Promise<SummarizePostOutput> {
  return summarizePostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePostPrompt',
  input: { schema: SummarizePostInputSchema },
  output: { schema: SummarizePostOutputSchema },
  prompt: `You are an expert editor. Please provide a concise, engaging summary of the following blog post content. The summary should be approximately 2-3 sentences long and capture the main points of the article.

  Post Content:
  "{{content}}"
  `,
});


const summarizePostFlow = ai.defineFlow(
  {
    name: 'summarizePostFlow',
    inputSchema: SummarizePostInputSchema,
    outputSchema: SummarizePostOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
