// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  build: {
    target: 'es2022', // Add this line
    rollupOptions: {
      input: {
        main: 'src/main.js',
      },
    },
  },
});
