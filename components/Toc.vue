<script setup lang="ts">
import type { Toc } from "@nuxt/content/dist/runtime/types";

defineProps<{ toc: Toc }>();
</script>

<template>
  <div class="toc">
    <TocLinks :links="toc.links" />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

.toc {
  position: fixed;
  top: 50%;
  right: 1.75rem;
  transform: translateY(-50%);

  max-height: calc(100vh - 3.5rem - 4.5rem - 3.5rem);
  overflow-y: auto;

  border-left: 1px dashed;
  @include custom-scrollbar(rgba(144, 147, 153, 0.3), rgba(144, 147, 153, 0.5), rgba(144, 147, 153, 0.1));
}
</style>
