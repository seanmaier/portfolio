import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      include: /\.(jpe?g|png|gif|webp|avif|tiff|heif|heic)$/i,
      defaultDirectives: new URLSearchParams({
        format: "webp",
        quality: "80",
      }),
    }),
  ],
});
