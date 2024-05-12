import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
import VueRouter from 'unplugin-vue-router/vite'; // 自动化路由
import UnoCSS from 'unocss/vite'; // unocss
import AutoImport from 'unplugin-auto-import/vite'; //自动导入api
import { VueRouterAutoImports } from 'unplugin-vue-router'; //自动导入路由
import Components from 'unplugin-vue-components/vite'; //自动导入组件
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    Components({}),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', '@vueuse/core', VueRouterAutoImports],
      dts: './auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
