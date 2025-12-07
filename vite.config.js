import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'  <-- REMOVE THIS

export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),  <-- REMOVE THIS
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    hmr: {
      overlay: false,
    },
  },
})
