<template>
  <div class="fixed top-0 w-full z-2" :class="{ 'bg-black bg-opacity-30': y > 0 }">
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="logo" />
      <Menu></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>footer</div>
</template>
<script setup lang="ts">
const { y } = useWindowScroll();
</script>
<style></style>
<route lang="yaml">
meta:
  layout: default
</route>
