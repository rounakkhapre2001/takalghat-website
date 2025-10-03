import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,             // Server-only URL
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Server-only service role key
);
