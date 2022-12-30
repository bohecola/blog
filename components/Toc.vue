<script setup lang="ts">
import { Toc } from "@nuxt/content/dist/runtime/types";

defineProps<{ toc: Toc }>();
</script>

<template>
  <div class="toc">
    <TocLinks :links="toc.links" />
  </div>
</template>

<style lang="scss" scoped>
.toc {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 4.25rem;
  max-height: 19.375rem;
  overflow-y: auto;
  opacity: 0;
  transition: all .4s ease-out;
  &:hover {
    opacity: .7;
  }
}
</style>
