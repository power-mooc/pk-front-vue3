import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// 重置css
import '@unocss/reset/tailwind.css';
// unocss
import 'virtual:uno.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createHead } from '@unhead/vue'; // markdown head
const head = createHead();
const app = createApp(App);
// element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(head);
app.use(createPinia());
app.use(router);

app.mount('#app');
