import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimizaciones para producción
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  server: {
    // Configuración para desarrollo
    hmr: {
      overlay: false
    }
  },
  preview: {
    // Configuración para preview (producción local)
    port: 4173,
    strictPort: true
  }
});
