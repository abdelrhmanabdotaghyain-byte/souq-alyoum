import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// أثناء التطوير (npm run dev) الطلبات اللي على /api بتتحوّل للسيرفر على بورت 4000 تلقائياً
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:4000', '/uploads': 'http://localhost:4000' } },
})
