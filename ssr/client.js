import { createSSRApp } from 'vue';
const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{count}}</button>`
});

app.mount('#app');
