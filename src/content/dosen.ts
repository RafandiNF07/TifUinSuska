// src/content/dosen.ts
import { defineCollection, z } from "astro:content";

export const dosenCollection = defineCollection({
  type: "data", // GANTI JADI 'data' (karena pakai JSON)
  schema: ({ image }) =>
    z.object({
      name: z.string(), // Nama lengkap beserta gelar
      nip: z.string(),
      jabatan: z.string(),
      email: z.string().email(),
      foto: image(), // Helper image() wajib untuk memproses gambar
      order: z.number().default(99), // Opsional: untuk urutan
      pendidikan: z.array(z.string()).default([]),
    }),
});
