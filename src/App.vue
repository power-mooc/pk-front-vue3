<template>
  <RouterView />
</template>
<script setup lang="ts">
import { useThemeStore } from './stores/useThemeStore';
const themeStore = useThemeStore();
useResizeObserver(document.body, () => {
  const width = window.innerWidth;
  const contentWidth = 1200; //内容宽度
  themeStore.$patch({
    rate: width < contentWidth ? Number((width / contentWidth).toFixed(2)) : 1
  });
});
</script>
<style lang="scss" scoped></style>
