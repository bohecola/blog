<template>
  <div class="links">
    日常笔记：
    <nuxt-link :to="`https://notes.colax.co`" target="_blank">
      notes.colax.co
    </nuxt-link> 
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'links' });
</script>