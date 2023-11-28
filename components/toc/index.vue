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
  max-height: calc(100vh - 3.5rem - 4.5rem - 3.5rem);
  font-size: 12px;
  border-left: 1px dashed var(--un-prose-borders);
  transform: translateY(-50%);
  transition: all .4s ease-out;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);

    &:hover {
      background-color: rgba(144, 147, 153, 0.5);
    }
  }

  &::-webkit-scrollbar-track {
    background: rgba(144, 147, 153, 0.1);
  }
}
</style>
