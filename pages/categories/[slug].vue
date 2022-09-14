<template>
  <div class="posts">
    <h1 class="mt-0 opacity-60">目录</h1>
    <h2 class="mt-0 opacity-60">
      {{ ($route.params.slug as string).toUpperCase().replace('-', ' ') }}
    </h2>
    <!-- 列表 -->
    <post-list :category-slug="($route.params.slug as string)" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
// 文档标题
useHead({ title: route.params.slug as string });
</script>
