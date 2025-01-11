import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: 'terser',
    outDir: 'dist'
  },
  server: {
    port: 21000,
    host: '0.0.0.0',
    strictPort: true
  },
  base: '/'
});