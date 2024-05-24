<template>
  <div>
    <Swiper :items="items" :height="36 * themeStore.rate + 'rem'" />
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
          v-for="(item, index) in projects"
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
        <a :href="item.url" target="_blank" v-for="(item, index) in courses" :key="index" class="flex">
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
        :items="items"
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
  </div>
</template>
<script lang="ts" setup>
import bg from '@/assets/images/bg.png';
import type { SwiperItemType } from '@/components/types';
import { useThemeStore } from '@/stores/useThemeStore';
import type { Swiper as SwiperType } from 'swiper';
const themeStore = useThemeStore();
const { width } = useWindowSize();
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子4',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子5',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  }
];
const projects = [
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    icon: 'i-mdi:web'
  }
];
const courses = [
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  },
  {
    title: '前端高级工程师(大前端)',
    subTitle: '技术成长&职业破局',
    url: 'https://www.baidu.com',
    image: bg
  }
];
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

const selectItem = ref<SwiperItemType>(items[0]);
const handleSwiperChange = (e: SwiperType) => {
  const swiperIndex = e.activeIndex;
  selectItem.value = items[swiperIndex];
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
