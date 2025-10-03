import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer"; // <-- use server client

// UPDATE member
export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    const formData = await req.formData();
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const category = formData.get("category") as string;
    const term = formData.get("term") as string;
    const description = formData.get("description") as string;
    const file = formData.get("photo") as File | null;

    let photo_url: string | null = null;

    if (file) {
      const fileData = await file.arrayBuffer();
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabaseAdmin.storage
        .from("team-photos")
        .upload(fileName, new Uint8Array(fileData), { cacheControl: "3600", upsert: true });
      if (uploadError) return NextResponse.json({ error: uploadError.message }, { status: 500 });

      const { data: urlData } = supabaseAdmin.storage.from("team-photos").getPublicUrl(fileName);
      photo_url = urlData.publicUrl;
    }

    const { data, error } = await supabaseAdmin
      .from("team")
      .update({ name, role, category, term, description, ...(photo_url ? { photo_url } : {}) })
      .eq("id", Number(id))
      .select();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data[0]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}

// DELETE member
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "ID missing" }, { status: 400 });

    const { data, error } = await supabaseAdmin.from("team").delete().eq("id", Number(id));
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
