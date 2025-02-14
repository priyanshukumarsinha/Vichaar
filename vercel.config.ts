import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
    "// This ensures Vite outputs files to 'dist'
  }
});

