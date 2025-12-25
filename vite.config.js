import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // Makes asset paths relative
  build: {
    outDir: 'docs', // Output to docs for GitHub Pages
  }
})
