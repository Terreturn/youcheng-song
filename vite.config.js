import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        photography: resolve(__dirname, 'src/pages/photography.html'),
        technical: resolve(__dirname, 'src/pages/technical.html'),
      },
    },
  },
})
