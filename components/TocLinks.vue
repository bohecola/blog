<script setup lang="ts">
import { TocLink } from "@nuxt/content/dist/runtime/types";

defineProps<{ links: TocLink[] }>();
</script>

<template>
  <ul class="toc-links">
    <li
      v-for="link in links"
      :key="link.id"
    >
      <NuxtLink :to="`#${link.id}`" :title="link.text">
        {{ link.text }}
      </NuxtLink>
      <TocLinks v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  li {
    max-width: 13ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
