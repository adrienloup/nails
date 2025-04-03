import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Nails',
        short_name: 'nails',
        description: '',
        start_url: '/nails',
        display: 'standalone',
        theme_color: '#e6e6e6',
        background_color: '#171717',
        icons: [
          {
            src: '/nails/nails-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/nails/nails-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/nails/nails-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/nails/nails-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/nails',
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  server: {
    port: 3030,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/src/assets/scss/base/breakpoints" as *;',
        api: 'modern',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '@testing-library/jest-dom/vitest',
    include: ['src/**/__tests__/*.component.spec.(ts|tsx)'],
    exclude: ['node_modules', 'src/test/e2e/**'],
  },
});
