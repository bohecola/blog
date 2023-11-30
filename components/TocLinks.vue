<script setup lang="ts">
import type { TocLink } from "@nuxt/content/dist/runtime/types";

defineProps<{ links: TocLink[] }>();
</script>

<template>
  <ul class="m-0 list-none">
    <li
      v-for="link in links"
      :key="link.id"
      class="max-w-30ch text-sm"
    >
      <a
        class="font-mono opacity-80 hover:opacity-100"
        :href="`#${link.id}`"
        :title="link.text"
      >
        <span
          v-if="link.depth > 2"
          class="mr-2 opacity-50"
        >></span>
        <span>{{ link.text }}</span>
      </a>
      <TocLinks
        v-if="link.children"
        :links="link.children"
      />
    </li>
  </ul>
</template>
