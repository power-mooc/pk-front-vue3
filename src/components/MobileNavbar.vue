<template>
  <div class="fixed bottom-0 w-full h-14 flex justify-around z-30 shadow-2xl border-t bg-white">
    <router-link class="item" to="/">
      <i class="i-carbon:home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="item" to="/community">
      <i class="i-uiw-message"></i>
      <span>社区</span>
    </router-link>
    <router-link class="item" to="/study">
      <i class="i-streamline:interface-content-book-2-library-content-books-book-shelf-stack"></i>
      <span>学习</span>
    </router-link>
    <router-link class="item" to="/about">
      <i class="i-la:user-solid text-2xl"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizanal'>
  }
});
</script>

<style scoped lang="scss">
.item {
  @apply flex flex-col items-center flex-1 relative  text-xl font-300 cursor-pointer;

  i {
    @apply flex-1 text-dark-50;
  }
  span {
    @apply text-sm text-dark-50;
  }

  &:focus {
    @apply font-500;
    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)];
    }
  }

  &.router-link-active {
    span,
    i {
      @apply font-500 text-main;
    }
  }
  &.router-link-active {
    i,
    span {
      @apply text-main font-500;
    }
  }
}
</style>
