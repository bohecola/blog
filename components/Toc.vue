<script setup lang="ts">
import type { Toc } from "@nuxt/content/dist/runtime/types";

defineProps<{ toc: Toc }>();
</script>

<template>
  <div
    class="
      py-5 w-[26ch] h-[calc(100vh-66px)] border-l
      overflow-y-auto scroll-bar
      bg-[--bg] dark:border-zinc-800 z-20
    "
  >
    <TocLinks :links="toc.links" />
  </div>
</template>
