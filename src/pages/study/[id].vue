<template>
  <div>id:{{ routeParams.id }}</div>
</template>
<script lang="ts" setup>
import { useParams } from '@/hooks';
const routeParams = useParams<{ id: string }>();
</script>
<style></style>
