import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// c
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {},
    port: 1337,
  },
})
