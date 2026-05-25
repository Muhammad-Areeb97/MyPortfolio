import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/icons-material", "@mui/material", "@emotion/react", "@emotion/styled"],
          echarts: ["echarts", "echarts-for-react"],
          leaflet: ["leaflet", "react-leaflet"],
          table: ["@tanstack/react-table"],
        },
      },
    },
  },
});
