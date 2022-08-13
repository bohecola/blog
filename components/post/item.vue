<template>
  <nuxt-link 
    class="item block mt-2 mb-6 font-normal opacity-60 hover:opacity-100"
    :to="{
      name: 'posts-slug',
      params: {
        slug: post.slug,
        id: post.id
      }
    }"
  >
    <li class="no-underline">
      <div class="title text-lg leading-1.2em">{{ post.title }}</div>
      <div class="desc opacity-50 text-sm my-4px">{{ post.desc }}</div>
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
