import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServerClient";

export async function PATCH(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

  const formData = await req.formData();
  const name = formData.get("name") as string;

  const { data, error } = await supabaseServer
    .from("team")
    .update({ name })
    .eq("id", Number(id))
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data[0]);
}
