import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    port: 4003,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
