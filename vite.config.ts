import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src", "app", "pages"),
      "@features": path.resolve(__dirname, "src", "features"),
      "@components": path.resolve(__dirname, "src", "shared", "components"),
      "@ui": path.resolve(__dirname, "src", "shared", "components", "ui"),
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname),
    },
  },
});
