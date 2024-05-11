<template>
  <div class="p-4">hello home</div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
   <div>pos: {{ x }}, {{ y }}</div>
</template>
<script setup lang="ts">
const str = ref('11')
const { x, y } = useMouse()
</script>
