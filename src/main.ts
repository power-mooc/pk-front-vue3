import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
// 重置css
import 'reset-css';
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
