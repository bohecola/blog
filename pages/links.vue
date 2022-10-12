<template>
  <div class="links">
    笔记：
    <nuxt-link :to="`https://bohecola.github.io/notes/`" target="_blank">
      https://bohecola.github.io/notes/
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'links' });
</script>