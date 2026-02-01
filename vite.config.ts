import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        altacursos: 'altacursos/altacursos.html',
      },
    },
  },
});