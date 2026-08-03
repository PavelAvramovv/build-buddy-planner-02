import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  image: z.string().min(100), // data URL
  finish: z.string().min(1),
  colour: z.string().min(1),
  notes: z.string().max(300).optional(),
});

export const renderAfterImage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured");

    const prompt = `You are a photorealistic architectural visualiser for a UK external wall insulation and rendering company.
Take this photo of an existing building and show it AFTER a professional external wall insulation and ${data.finish} finish has been installed.
Finish: ${data.finish}. Colour: ${data.colour}.
${data.notes ? `Client notes: ${data.notes}.` : ""}
Keep the exact same camera angle, perspective, building shape, windows, doors, roof and surroundings. Only change the wall finish: smooth, clean, freshly rendered walls with crisp bead lines and neat reveals. Photorealistic, natural daylight, high detail.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        modalities: ["image", "text"],
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: data.image } },
            ],
          },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      if (res.status === 429) throw new Error("Too many requests — please try again in a minute.");
      if (res.status === 402) throw new Error("AI credits exhausted — please top up your workspace credits.");
      throw new Error(`Image generation failed [${res.status}]: ${body}`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { images?: { image_url?: { url?: string } }[]; content?: string } }[];
    };
    const url = json.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!url) throw new Error("The AI did not return an image. Please try another photo.");
    return { image: url };
  });
