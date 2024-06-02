<template>
  <div
    class="fixed top-0 w-full z-99 transition-all duration-500 h-auto"
    :class="[{ 'bg-black bg-opacity-30 shadow-lg': y > 0 }, { 'lt-sm:(bg-black h-full)': show }]"
  >
    <Container>
      <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt="logo" />
      <div
        @click="toggle()"
        class="hidden cursor-pointer text-gray-100 text-2xl absolute top-3 right-5 hover:text-white lt-sm:block"
      >
        <Transition name="rotate-icon" mode="out-in">
          <div class="i-ic-round-menu" v-if="!show"></div>
          <div class="i-radix-icons:cross-2" v-else></div>
        </Transition>
      </div>
      <!-- 菜单 -->
      <Menu v-show="show || ltWidth" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div>
    <div class="mobile-hide">
      <DefaultFooter icp="鄂ICP备XXXXX号-1"></DefaultFooter>
    </div>
    <div class="hidden mobile">
      <MobileNavbar></MobileNavbar>
    </div>
  </div>
</template>
<script setup lang="ts">
const { y } = useWindowScroll();
const [show, toggle] = useToggle(false);
// 大于640会始终显示
const ltWidth = computed(() => {
  return window.innerWidth >= 640;
});
</script>
<style scope lang="scss">
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
