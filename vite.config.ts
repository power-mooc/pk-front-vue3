import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
import VueRouter from 'unplugin-vue-router/vite'; // 自动化路由
import UnoCSS from 'unocss/vite'; // unocss
import AutoImport from 'unplugin-auto-import/vite'; //自动导入api
import { VueRouterAutoImports } from 'unplugin-vue-router'; //自动导入路由
import Components from 'unplugin-vue-components/vite'; //自动导入组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // element plus 自动导入

import Icons from 'unplugin-icons/vite'; // iconfont图标
import IconsResolver from 'unplugin-icons/resolver'; // iconfont
import MetaLayouts from 'vite-plugin-vue-meta-layouts'; // layous布局
import { viteMockServe } from 'vite-plugin-mock'; //mock数据
import Markdown from 'unplugin-vue-markdown/vite'; // markdown
import prism from 'markdown-it-prism'; // markdown语法高亮
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      VueRouter({
        extensions: ['.vue', '.md']
      }),
      vue({ include: [/\.vue$/, /\.md$/] }),
      Markdown({
        headEnabled: true,
        markdownItUses: [prism]
      }),
      vueJsx(),
      VueDevTools(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: ['vue', '@vueuse/core', 'pinia', VueRouterAutoImports],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
      }),
      Icons({
        autoInstall: true
      }),
      MetaLayouts({
        target: 'src/layouts',
        defaultLayout: 'default',
        skipTopLevelRouteLayout: true
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      sourcemap: true
    }

    // optimizeDeps: {
    //   exclude: ['vue']
    // }
  };
});
