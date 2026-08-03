import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { company, services } from "@/lib/site-content";

type ChatRequestBody = { messages?: unknown };

const systemPrompt = `You are the AI assistant for ${company.name}, a UK insulation and rendering company based at ${company.address}.

Contact details you may share:
- Phone: ${company.phone}
- Email: ${company.email}
- Areas covered: Birmingham, Solihull, Coventry, Wolverhampton, the West Midlands and nationwide across the UK.

Services offered (with page links):
${services.map((s) => `- ${s.title} (/services/${s.slug}): ${s.text}`).join("\n")}

Guidelines:
- Write in British English, friendly and practical, like an experienced surveyor.
- Keep answers short (2-4 sentences or a tight bullet list) unless the visitor asks for detail.
- Give realistic guidance on insulation, render, plaster, damp, U-values, UK Building Regulations and PAS 2035, but never quote a firm price — explain that prices depend on a free survey and invite the visitor to call ${company.phone} or use the contact page (/contact).
- Encourage visitors to try the AI before & after visualiser on the homepage when they ask what a finish would look like.
- If a question is outside insulation, rendering or the company's work, politely steer back.
- Never invent guarantees, certifications, grants or availability you are not sure about.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);

        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: systemPrompt,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
