import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // handle warning on vendor.js bundle size
  },
  base: "/yolov8-tfjs/",
});
