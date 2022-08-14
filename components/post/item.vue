<template>
  <nuxt-link 
    class="item block mt-2 mb-6 font-normal opacity-60 hover:opacity-100"
    :to="`/posts/${post.slug}`"
  >
    <li class="no-underline">
      <div class="title text-lg leading-1.2em">{{ post.title }}</div>
      <div class="desc opacity-50 text-sm my-4px">{{ post.desc }}</div>
      <div
        v-if="post.categoryName || post.tagNames" 
        class="flex items-center desc opacity-50 text-sm my-4px">
        <div v-if="post.categoryName" class="mr-1" i-carbon-catalog />
        {{ post.categoryName }}
        <div v-if="post.tagNames" ml-2 mr-1 i-material-symbols-bookmarks-outline-rounded />
        {{ post.tagNames }}
      </div>
      <div class="time opacity-50 text-sm">{{ createdTime }}</div>
    </li>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { Post } from '~~/types';
// 数据
const props = defineProps<{ post: Post }>();

// 创建时间格式化
const createdTime = computed(() => {
  return new Date(props.post.createdAt)
    .toDateString()
    .substring(4)
    .replace(/(?<=\d)\u0020(?=\d)/g, ', ');
});
</script>

<style lang="scss">
.prose a.item {
  transition: all .1s ease-in;
  text-decoration: none;
  border-bottom: none;
}
</style>
