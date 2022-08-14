<template>
  <div class="tag">
    <h1 class="mt-0 opacity-60">标签</h1>
    <ul>
      <li 
        v-for="tag in tags"
        :key="tag.id"
        class="mb-2"
      >
        <nuxt-link
          class="opacity-60 hover:opacity-75"
          :to="`/tags/${tag.slug}`"
        >
          {{ `${tag.name}(${tag.count})` }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'Tags' });
// 数据获取
const { data: tags } = useLazyAsyncData('tags', () => $fetch('/api/tags'));
</script>
