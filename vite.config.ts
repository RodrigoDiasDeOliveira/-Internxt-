import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '../internxt-frontend', // Se o seu index.html estiver na pasta src, ajuste conforme necessário
  build: {
    outDir: '../dist', // O diretório de saída para a build
  },
});
