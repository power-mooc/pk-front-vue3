<script setup lang="ts">
</script>

<template>
  <header>

    <div class="wrapper">
      <div class="hao"></div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper{
  .hao{
    background: red;
  }
}

</style>
