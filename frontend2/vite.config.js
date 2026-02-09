import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/_app.scss";`,
        // Isso aqui silencia os avisos de dependências (node_modules)
        quietDeps: true,
        // Em versões muito recentes do Sass, use também:
        silenceDeprecations: ['import', 'global-builtin', 'color-functions']
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
