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
      inline: [/primevue/],
    },
    transformMode: {
      web: [/primevue/],
    },
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: [
        'components/**/*.vue',
        'pages/**/*.vue',
        'store/**/*.ts',
        'services/**/*.js',
      ],
      exclude: ['node_modules', 'test/**/*', '.nuxt/**/*'],
    },
  },
})
