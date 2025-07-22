import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/saaketh-portfolio/',
  plugins: [
    tailwindcss(),
    react()
  ],
  // Use different base paths for development vs production
})