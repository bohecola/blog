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
  right: 1.75rem;
  padding: 1rem 1rem 1rem 0;
  max-height: calc(100vh - 3.5rem - 4.5rem - 1.25rem);
  font-size: 12px;
  border-left: 1px dashed #bbb;
  transform: translateY(-50%);
  transition: all .4s ease-out;
  overflow-y: auto;
}
</style>
