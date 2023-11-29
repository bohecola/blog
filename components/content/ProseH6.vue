<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id: string }>();
const heading = 6;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
  <h6
    :id="id"
    tabindex="-1"
  >
    <a
      v-if="generate"
      class="header-anchor"
      :href="`#${id}`"
    >
      #
    </a>
    <slot />
  </h6>
</template>
