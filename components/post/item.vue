<template>
  <nuxt-link 
    class="item block mt-2 mb-6 font-normal opacity-60 hover:opacity-100"
    :to="`/posts/${post.slug}`"
  >
    <li class="no-underline">
      <div class="title text-lg leading-1.2em">{{ post.title }}</div>
      <div class="desc opacity-50 text-sm mt-2 mb-1">{{ post.desc }}</div>
      <div class="flex items-center opacity-50 text-sm">
        <span class="time">{{ post.createdAt }}</span>
        <div
          v-if="post.categoryName || post.tagNames" 
          class="ml-2 flex items-center desc">
          <div v-if="post.categoryName" class="mr-1" i-ri-book-line />
          <span>{{ post.categoryName }}</span>
          <div v-if="post.tagNames" ml-2 mr-1 i-carbon-tag-group />
          <span>{{ post.tagNames }}</span>
        </div>
      </div>
    </li>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { Post } from '~~/types';
// 数据
const props = defineProps<{ post: Post }>();
</script>

<style lang="scss">
.prose a.item {
  transition: all .1s ease-in;
  text-decoration: none;
  border-bottom: none;
}
</style>
