<template>
  <div class="links">
    语雀非会员对外开放不再免费了，抽时间用vitepress搭建了一个静态站点，以后笔记就迁移到这里了
    <nuxt-link :to="`notes.colax.co`" target="_blank">
      notes.colax.co
    </nuxt-link> 
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'links' });
</script>