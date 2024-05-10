/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
