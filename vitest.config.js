import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    deps: {
      inline: [/primevue/], // Transforma todos os arquivos do PrimeVue
    },
    transformMode: {
      web: [/primevue/], // Garante que PrimeVue seja transformado corretamente
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
})
