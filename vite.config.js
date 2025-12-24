import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/hotel-dashboard/',  // ← اسم المستودع
  plugins: [react()],
});
