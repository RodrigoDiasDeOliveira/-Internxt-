import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Certifique-se de que o root está correto
  build: {
    outDir: './dist', // Diretório de saída
    emptyOutDir: true, // Limpa o diretório de saída antes da build
  },
});
