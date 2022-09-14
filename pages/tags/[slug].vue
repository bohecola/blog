<template>
  <div class="posts">
    <h2 class="mt-0 opacity-60">标签</h2>
    <h3 class="mt-0 opacity-60">{{ ($route.params.slug as string).toUpperCase().replace('-', ' ') }}</h3>
    <!-- 列表 -->
    <post-list :tag-slug-list="[$route.params.slug]" />
  </div>
</template>

<script lang="ts" setup>
// 路由
const route = useRoute();
// 文档标题
useHead({ title: route.params.slug as string });
</script>
