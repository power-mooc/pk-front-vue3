<template>
  <div>
    <Swiper :items="items" height="36rem" />
  </div>
</template>
<script lang="ts" setup>
import bg from '@/assets/images/bg.png';
import type { SwiperItemType } from '@/components/types';
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  }
];
</script>
<style></style>
