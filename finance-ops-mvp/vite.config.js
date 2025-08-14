import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                // يضمن مسارات مثل /new تفتح طبيعي
  server: {
    allowedHosts: ['.csb.app'] // يقبل أي رابط من CodeSandbox
  }
})
