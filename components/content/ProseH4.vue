<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id: string }>();
const heading = 4;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
  <h4
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
  </h4>
</template>
