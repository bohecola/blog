<template>
  <nuxt-link 
    class="
      item
      block
      font-normal
      mb-6
      mt-2
      no-underline
      opacity-60
      hover:opacity-100"
    :to="`/posts/${post.slug}`"
  >
    <li class="no-underline">
      <div class="title text-lg leading-1.2em">{{ post.title }}</div>
      <div class="desc opacity-50 text-sm my-4px">{{ post.desc }}</div>
      <div class="time opacity-50 text-sm">{{ post.createdAt }}</div>
    </li>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { Post } from '~~/types';

const props = defineProps<{ post: Post }>();
</script>

<style lang="scss">
a {
  &.item {
    transition: all .2s ease-in;
    text-decoration: none;
    border-bottom: none;
  }
}
</style>
