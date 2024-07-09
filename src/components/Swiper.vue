<template>
  <swiper
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    @slide-change="onSlideChange"
    :navigation="{
      nextEl: '.next',
      prevEl: '.prev'
    }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    v-bind="$attrs"
  >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :swiperItem="item">
        <div
          class="w-full h-full bg-no-repeat bg-cover"
          :style="{
            backgroundImage: `url(${item.image})`
          }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center align-start lt-sm:p-4">
              <p class="text-xl sm:text-4xl font-bold text-white pb-4">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 text-white">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      v-if="!$attrs.pagination_hide"
      class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-40 h-12 z-30"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin text-8"></div>
      <div class="next i-mdi-arrow-right-thin text-8"></div>
    </div>
  </swiper>
</template>
<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import type { SwiperItemType } from './types';
import type { Swiper as SwiperType } from 'swiper';

const modules = [Navigation, Pagination];
const props = defineProps({
  height: {
    type: String,
    default: 'h-80'
  },
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
});
const getClassAndStyle = (str: string) => {
  // props.height
  // 如果height的值包含rem,em,px，则返回 {string: str, class: ''}
  // 如果height的值包含h-，则返回 {string: '', class: str}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  };
};

const emits = defineEmits(['change']);
const onSlideChange = (e: SwiperType) => {
  emits('change', e);
};
</script>
<style scoped lang="scss">
.swiper-button-disabled {
  @apply c-black opacity-30;
}
</style>
