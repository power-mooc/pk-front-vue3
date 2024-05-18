<template>
  <div class="fixed top-0 w-full z-2" :class="{ 'bg-black bg-opacity-30': y > 0 }">
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="logo" />
      <div
        @click="toggle()"
        class="hidden i-ic-round-menu text-gray-100 text-2xl absolute top-3 right-5 hover:text-white lt-sm:block"
      ></div>
      <Menu v-show="show || maxWidth" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>
<script setup lang="ts">
const { y } = useWindowScroll();
const [show, toggle] = useToggle(false);
const maxWidth = computed(() => {
  return window.innerWidth >= 640;
});
</script>
<style scope lang="scss"></style>
