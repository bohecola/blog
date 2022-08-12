<template>
  <ul>
    <post-item
      v-for="post of posts"
      :key="post.id"
      :post="post"
    />
  </ul>
</template>

<script lang="ts" setup>
import { Post } from '~~/types';

const props = defineProps<{ posts: Post[] }>();
</script>
