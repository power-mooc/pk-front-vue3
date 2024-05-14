<template>
  <router-link class="item" to="/">产品</router-link>
  <a class="item" href="https://github.com/power-mooc/pk-front-vue3/issues" target="_blank">社区</a>
  <router-link class="item" to="/study">学习</router-link>
  <router-link class="item" to="/about">关于</router-link>
</template>

<style scoped lang="scss">
.item {
  @apply text-white text-xl px-8  font-300  cursor-pointer;
  &:hover {
    @apply font-500 relative;
    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-[1px] font-300 bottom-0 left-[calc(50%-1rem)];
    }
  }
}
</style>
