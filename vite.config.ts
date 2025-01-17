import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // @types/node --save-dev

// Load environment variables based on the mode (e.g., development, production, etc.)
export default defineConfig(({ mode }) => {
  // const envFile = `.env.${mode}`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      port: 3000, // config port defaul
      open: true, // Open browser on server start
    },
    build: {
      outDir: "dist", // Build output directory
      sourcemap: mode !== "production", // Enable sourcemaps in non-production mode
    },
    envDir: "./", // Set environment variables directory
    envPrefix: "VITE_", // Prefix for exposing environment variables to the client / biến môi trường với vite
  };
});
