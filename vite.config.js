import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  base: '/enrilion-blog/',

  // Add polyfill for `crypto` in Node.js
  resolve: {
    alias: {
      crypto: 'crypto-browserify',  // Polyfill crypto for Node.js environment
    },
  },

  // Optional: if you need environment-specific definitions
  define: {
    'process.env': {},
  },
});

