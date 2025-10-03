import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const googleApiKey = process.env.GOOGLE_API_KEY!;

type Data = {
  translatedText?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { messageId, targetLang } = req.body as {
    messageId: number;
    targetLang: string;
  };

  // Check if translation already exists
  const { data: existing } = await supabase
    .from("translations")
    .select("translated_text")
    .eq("message_id", messageId)
    .eq("language", targetLang)
    .single();

  if (existing) return res.status(200).json({ translatedText: existing.translated_text });

  // Fetch original message
  const { data: messageData } = await supabase
    .from("messages")
    .select("content")
    .eq("id", messageId)
    .single();

  const originalText = messageData?.content;
  if (!originalText) return res.status(404).json({ message: "Message not found" });

  // Call Google Translate API
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${googleApiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: originalText, target: targetLang }),
    }
  );

  const data = await response.json();
  const translatedText = data.data?.translations?.[0]?.translatedText;

  if (!translatedText) return res.status(500).json({ message: "Translation failed" });

  // Store translation in Supabase
  await supabase
    .from("translations")
    .upsert({ message_id: messageId, language: targetLang, translated_text: translatedText });

  return res.status(200).json({ translatedText });
}
