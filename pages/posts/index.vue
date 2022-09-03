<template>
  <div class="posts">
    <h1 class="mt-0 opacity-60">Posts</h1>
    <!-- 列表 -->
    <post-list :key="$route.path" />
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'posts' });
</script>
