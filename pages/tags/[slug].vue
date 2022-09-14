<template>
  <div class="posts">
    <h1 class="mt-0 opacity-60">
      标签/{{ ($route.params.slug as string).toUpperCase().replace('-', ' ') }}
    </h1>
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
