<template>
  <div>
    <Swiper :items="homeStore.swipers" :height="36 * themeStore.rate + 'rem'" />
    <Container>
      <!-- 标题 -->
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <!-- 课程 -->
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <a
          class="group flex transition-all hover:(bg-sky-500 shadow-lg text-white rounded-1 transform-translate-y--1)"
          target="_blank"
          :href="item.url"
          v-for="(item, index) in homeStore.projects"
          :key="index"
        >
          <Card
            class="card w-full"
            :title="item.title"
            :sub-title="item.subTitle"
            border
            :icon="item.icon"
            image-type="rounded"
          >
            <template #default>
              <div class="group-hover:text-white flex justify-between items-center mx-4 text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 官方课程 -->
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4">
        <a :href="item.url" target="_blank" v-for="(item, index) in homeStore.courses" :key="index" class="flex">
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 课程项目展示 -->
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">课程项目展示</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
        </div>
      </div>
    </Container>
    <Container class="w-full text-gray-400">
      <Swiper
        :items="homeStore.swiperProjects"
        :height="(width > 640 ? 28 : 40) * themeStore.rate + 'rem'"
        class="w-full sm:w-2/3"
        @change="handleSwiperChange"
      ></Swiper>
      <div class="lt-sm:display-none sm:(w-1/3) bg-coolgray-700 self-stretch flex flex-col justify-center px-4">
        <a v-if="selectItem" :href="selectItem.url" target="_blank">
          <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
          <div class="text-sm">{{ selectItem.subTitle }}</div>
          <div class="flex items-center justify-between mb-4">查看更多</div>
          <div class="i-mdi:arrow-right-thin text-4xl"></div>
        </a>
      </div>
    </Container>
    <!-- 合作伙伴 -->
    <Container>
      <div class="text-2xl font-bold mt-8">合作伙伴</div>
    </Container>
    <Container>
      <Swiper
        height="200px"
        :space-between="50"
        :pagination="{ clickable: true }"
        :navigation="undefined"
        :slides-per-view="4"
        :items="partners"
        class="w-full"
        loop
        :pagination_hide="true"
      >
        <template #default="{ item }">
          <div class="px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100">
            <div
              class="w-full h-full bg-no-repeat bg-contain bg-center"
              :style="{
                backgroundImage: `url(${item.image})`
              }"
            ></div>
          </div>
        </template>
      </Swiper>
    </Container>
    <Container class="py-4">
      <div class="w-2/3 h-[300px] sm:h-[400px]">
        <div class="grid grid-cols-4 grid-rows-3 h-full gap-4 p-4">
          <div class="border col-start-1 col-span-4 row-start-1 row-span-1">1</div>
          <div class="border col-start-1 col-span-2 row-start-2 row-span-2">2</div>
          <div class="border col-start-3 col-span-2 row-start-2 row-span-1">3</div>
          <div class="border col-start-3 col-span-1 row-start-3 row-span-1">4</div>
          <div class="border col-start-4 col-span-1 row-start-3 row-span-1">5</div>
        </div>
      </div>
      <div class="w-1/3 self-stretch flex flex-col justify-center">
        <div class="text-2xl font-bold pb-4">讲师团队</div>
        <div class="text-sm text-gray-400">
          <p>一线大厂、资深技术大牛10名</p>
          <p>技术专家不定期坐镇直播间</p>
          <p>前端、Java、Python工程师对应不同用户开发需求</p>
          <p>年薪百万不是梦，加入我们!</p>
        </div>
      </div>
    </Container>
  </div>
</template>
<script lang="ts" setup>
import type { SwiperItemType } from '@/components/types';
import { useThemeStore } from '@/stores/useThemeStore';
import { useHomeStore } from '@/stores/useHomeStore';
import type { Swiper as SwiperType } from 'swiper';
const themeStore = useThemeStore();
const homeStore = useHomeStore();
const { width } = useWindowSize();
onMounted(async () => {
  await homeStore.fetchData();
});
const partners = ref(
  [
    'https://wayearn.static.toimc.com/partner/logo1.png',
    'https://wayearn.static.toimc.com/partner/logo2.png',
    'https://wayearn.static.toimc.com/partner/logo8.png',
    'https://wayearn.static.toimc.com/partner/logo5.png',
    'https://wayearn.static.toimc.com/partner/logo6.png',
    'https://wayearn.static.toimc.com/partner/logo7.png'
  ].map((item) => {
    return { image: item };
  })
);
const selectItem = ref<SwiperItemType>(homeStore.swipers[0]);
const handleSwiperChange = (e: SwiperType) => {
  const swiperIndex = e.activeIndex;
  selectItem.value = homeStore.swipers[swiperIndex];
};
</script>
<style scoped lang="scss">
:deep(.card) {
  &:hover {
    p {
      color: white;
    }
  }
}
</style>
