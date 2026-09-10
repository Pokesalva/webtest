import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// IMPORTANTE para GitHub Pages:
// Si tu repo se llama "mi-repo" y lo vas a publicar en
// https://usuario.github.io/mi-repo/  ->  base: "/mi-repo/"
// Si vas a usar un dominio propio o "usuario.github.io" (repo raíz) -> base: "/"
export default defineConfig({
  plugins: [react()],
  base: "/mi-repo/",
  build: {
    rollupOptions: {
      // Cada .html es una página real e independiente.
      // Si agregas una página nueva, agrégala también acá.
      input: {
        main: resolve(__dirname, "index.html"),
        tienda: resolve(__dirname, "tienda.html"),
        sobreMi: resolve(__dirname, "sobre-mi.html"),
      },
    },
  },
});
