import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const serviceWorkerProxyPlugin: Plugin = {
  name: "sw-dev-mapping",
  configureServer(server) {
    server.middlewares.use((req, _, next) => {
      if (req.url === "/sw.js") {
        req.url = "/src/sw.ts"; // Redirect internally
      }
      next();
    });
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), serviceWorkerProxyPlugin],
  resolve: {
    alias: {
      "@shadcn-ui": path.resolve(__dirname, "./src/shadcn-ui"),
    },
  },
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "./",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Your main app
        main: path.resolve(__dirname, "index.html"),
        // Your service worker
        sw: path.resolve(__dirname, "src/sw.ts"),
      },
      output: {
        // This function controls where files go and what they are named
        entryFileNames: (chunkInfo) => {
          // Do NOT give the "sw.js" file a hash
          if (chunkInfo.name === "sw") {
            return "[name].js"; // Outputs to dist/sw.js
          }
          return "assets/[name]-[hash].js"; // Standard hashing for everything else
        },
      },
    },
  },
  preview: {
    open: true,
  },
});
