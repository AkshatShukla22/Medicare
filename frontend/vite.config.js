import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const backendUrl = env.VITE_API_URL || 'http://localhost:8000'

  return {
    plugins: [react()],
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@contexts': path.resolve(__dirname, './src/contexts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      strictPort: false,
      proxy: {
        '/api': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/health': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      emptyOutDir: true,
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  }
})
