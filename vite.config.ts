import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
import VueRouter from 'unplugin-vue-router/vite'; // 自动化路由

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
