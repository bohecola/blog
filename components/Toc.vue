<script setup lang="ts">
import type { Toc } from "@nuxt/content/dist/runtime/types";

defineProps<{ toc: Toc }>();
</script>

<template>
  <div
    class="
      fixed top-[66px] right-0
      py-5 w-[35ch] h-[calc(100vh-66px)] border-l
      overflow-y-auto scroll-bar
      bg-[--bg] dark:border-zinc-800 z-20
    "
  >
    <TocLinks :links="toc.links" />
  </div>
</template>
