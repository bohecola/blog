<template>
  <div class="links">
    笔记迁移：
    <nuxt-link :to="`https://bohecola.github.io/manual/`" target="_blank">
      https://bohecola.github.io/manual/
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'links' });
</script>