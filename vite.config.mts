import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'App',
        short_name: 'app',
        description: '',
        start_url: '/app',
        display: 'standalone',
        theme_color: '#e6e6e6',
        background_color: '#171717',
        icons: [
          {
            src: '/app/app-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/app/app-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/app/app-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/app/app-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/app',
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
        silenceDeprecations: ['legacy-js-api'],
        additionalData: '@use "@/src/assets/scss/base/breakpoints" as *;',
        api: 'modern',
      },
    },
  },
});
