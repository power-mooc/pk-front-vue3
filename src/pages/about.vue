<template>
  <div class="bg-gray-100 flex-1 pb-15">
    <div class="bg bg-cover bg-center w-full h-[560px]" :style="{ backgroundImage: `url(${bg})` }"></div>
    <Container class="mt--80px value">
      <div class="text-center p-4 bg-white w-full">
        <div
          class="text-3xl pb-4 pt-6 mb-4 relative after:(absolute content-none bg-dark-100 h-1 w-20 bottom-1 left-1/2 transform-translate-x--1/2)"
        >
          企业价值
        </div>
        <ul>
          <li class="pb-3 text-base">坚持分享，让知识传播出去，带来价值。</li>
          <li class="pb-3 text-base">三人行，必有我师</li>
          <li class="pb-3 text-base">每个人能成为知识的传播者，帮助他人创造价值的同时为自己带来提升。</li>
          <li class="pb-3 text-base">乐于服务</li>
          <li class="pb-3 text-base">享受为他人服务的乐趣，努力为我们的学员和合作伙伴提供优质的服务</li>
        </ul>
      </div>
    </Container>
    <Container class="my-4">
      <div class="grid grid-cols-2 gap-3">
        <img :src="work" alt="" />
        <img :src="work1" alt="" />
      </div>
    </Container>
    <div class="text-center my-4 relative">
      <img :src="building" alt="" />
      <div class="absolute left-1/2 top-4 transform-translate-x--1/2 max-w-[1200px] lt-lg:(w-full)">
        <div
          class="text-3xl py-4 text-white relative after:(absolute content-none bg-gray-100 h-1 w-20 bottom-1 left-1/2 transform-translate-x--1/2)"
        >
          我们的故事
        </div>
        <div class="text-gray-200 text-base py-4">时光虽短，但故事足够精彩</div>
        <ul class="text-white">
          <li
            class="grid grid-cols-5 lg:(leading-10 text-start) xl:(leading-20)"
            v-for="(item, index) in stories"
            :key="index"
          >
            <div class="col-start-1 col-span-1 border-r-1 border-r-gray-100 h-full lt-lg:(display-none) dot">
              {{ item.title }}
            </div>
            <div class="col-start-2 col-span-4 pl-4 lt-lg:(col-start-1 col-span-5)">
              {{ item.desc }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Container class="pt-10">
      <Partners title="金牌讲师一对一指导" :items="[...partners, ...partners]"></Partners>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import bg from '@/assets/images/about.png';
import building from '@/assets/images/building.jpg';
import work from '@/assets/images/work.png';
import work1 from '@/assets/images/work1.png';

import type { PartnerType } from '@/components/types';

const stories = [
  {
    title: '2019年08月',
    desc: 'Brian与慕课达成合作，共同推出《大前端》体系课程， 首月销量破百。'
  },
  {
    title: '2020年01月',
    desc: '《大前端》体系课程销量突破1000人，学员好评如潮。'
  },
  {
    title: '2020年03月',
    desc: 'toimc全端全栈社区推出'
  },
  {
    title: '2021年06月',
    desc: '2021版本《大前端》体系课更新React,Flutter,小程序uniapp及支付内容'
  },
  {
    title: '2022年06',
    desc: '推出副业课程、Nestjs初阶课程、计划高级前端工程师'
  },
  {
    title: '2023年06',
    desc: '推出大前端2023版高级前端工程师课程'
  }
];

const partners: PartnerType[] = [
  {
    name: '百度',
    desc: '百度是全球最大的中文搜索引擎、最大的中文网站，拥有超过亿的活跃用户',
    image: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  },
  {
    name: '阿里巴巴',
    desc: '阿里巴巴集团是一家提供电子商务解决方案的公司，旗下拥有淘宝、天猫等电商平台',
    image: 'https://img.alicdn.com/imgextra/i1/O1CN01dUHefe1TNxqfFY58z_!!6000000002371-55-tps-404-83.svg'
  },
  {
    name: '腾讯',
    desc: '腾讯是一家以互联网为基础的科技与文化公司，旗下拥有微信、QQ等产品',
    image: 'https://www.tencent.com/img/index/tencent_logo.png'
  },
  {
    name: '字节跳动',
    desc: '字节跳动是一家中国的科技公司，旗下拥有抖音、今日头条等产品',
    image:
      'https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/0-390b5def140dc370854c98b8e82ad394.png'
  }
];
</script>

<style scoped lang="scss">
$dot: 8px;

@media (max-width: 1200px) {
  .bg {
    height: calc((100vw - 20px) / 1200 * 560);
    min-height: 200px !important;
  }
}

.value {
  @media screen and (max-width: 1200px) {
    margin-top: calc((100vw - 480px) / (1200 - 480) * -80);
  }
}

.dot {
  position: relative;
  &:before {
    content: '';
    display: inline-block;
    width: $dot;
    height: $dot;
    border-radius: 50%;
    background: #b8babb;
    position: absolute;
    top: calc((2.5rem - $dot) / 2);
    right: 0;
    transform: translate(50%, 0);
    z-index: 20;
  }
  &:after {
    content: '';
    display: inline-block;
    width: $dot + 6px;
    height: $dot + 6px;
    border-radius: 50%;
    background: lighten($color: #b8babb, $amount: 30);
    position: absolute;
    top: calc((2.5rem - $dot - 6px) / 2);
    right: 0;
    transform: translate(50%, 0);
    z-index: 10;
  }
}
</style>
