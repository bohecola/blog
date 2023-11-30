<script setup lang="ts">
import type { TocLink } from "@nuxt/content/dist/runtime/types";

defineProps<{ links: TocLink[] }>();
</script>

<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.id"
    >
      <a
        :href="`#${link.id}`"
        :title="link.text"
      >
        {{ link.text }}
      </a>
      <TocLinks
        v-if="link.children"
        :links="link.children"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    margin: 0;
    li {
      max-width: 30ch;
      font-size: .875rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow-x: hidden;
    }
  }
</style>
