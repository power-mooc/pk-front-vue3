<template>
  <div class="fixed top-0 w-full" :class="{ 'bg-black bg-opacity-30': y > 0 }">
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="logo" />
      <Menu></Menu>
    </Container>
  </div>
  22
  <router-view></router-view>
  <div class="h-[4000px]"></div>
  <div>footer1144</div>
</template>
<script setup lang="ts">
const { y } = useWindowScroll();
</script>
<style></style>
<route lang="yaml">
meta:
  layout: default
</route>
