import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  esbuild: {
    drop: ['console', 'debugger'], // esbuild 会在打包时移除 console 和 debugger 语句
  },
});
