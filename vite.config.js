import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // Use different base paths for development vs production
  base: process.env.NODE_ENV === 'production' ? '/saaketh-portfolio/' : '/',
})