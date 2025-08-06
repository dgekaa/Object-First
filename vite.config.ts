import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      verbose: true,
      deleteOriginFile: false,
      filter: filePath => /\.(js|css|html|svg|json)$/i.test(filePath),
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      verbose: true,
      deleteOriginFile: false,
      filter: filePath => /\.(js|css|html|svg|json)$/i.test(filePath),
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          charts: ['recharts'],
          router: ['react-router-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
        },
      },
    },
    minify: true,
    cssMinify: true,
    sourcemap: false,
  },
});
