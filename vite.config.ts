import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Isso permite que o servidor esteja disponível para redes externas (opcional)
    port: 3000, // Porta padrão (pode ser alterada se necessário)
  },
});
