<template>
  <div>
    <Swiper :items="items" height="36rem" />
    <Card
      :image="bg"
      image-type="avatar"
      title="title"
      sub-title="subTitle件建瓯市飞建瓯市杰佛逊杰佛逊的杰佛逊多久石佛释迦佛收费建瓯市的杰佛逊打飞机法身佛技术大佛技术都发局少东家收费建瓯市的杰佛逊的杰佛逊件佛殿发送佛教送到家佛大乘佛教"
      border
    ></Card>
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
