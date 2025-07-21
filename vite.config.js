import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages deployment
  // Use relative paths to fix 404 issues
  base: './',
  
  // Build configuration
  build: {
    // Output directory for built files
    outDir: 'dist',
    // Generate source maps for debugging
    sourcemap: false,
    // Ensure assets are properly referenced
    assetsDir: 'assets',
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
  },
  
  // Preview server configuration (for testing built files)
  preview: {
    port: 4173,
    open: true,
  },
})