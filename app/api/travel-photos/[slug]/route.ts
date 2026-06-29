import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug.replace(/[^a-z0-9-]/g, ""); // sanitize
  const dir = path.join(process.cwd(), "public", "travel", slug);
  try {
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f))
      .sort();
    const urls = files.map((f) => `/travel/${slug}/${f}`);
    return NextResponse.json({ photos: urls });
  } catch {
    return NextResponse.json({ photos: [] });
  }
}
