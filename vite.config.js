import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // เปิดให้เชื่อมต่อจากเครือข่ายทั้งหมด
    port: 3000, // พอร์ตที่ต้องการใช้
    strictPort: true, // ถ้าพอร์ตนี้ถูกใช้จะหยุดการทำงาน
  },
})
