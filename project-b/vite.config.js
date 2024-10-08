import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../common-component"),
    },
  },
  server: {
    port: 3000, // Set your desired port here
  },
});
