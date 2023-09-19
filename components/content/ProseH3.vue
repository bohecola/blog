<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id: string }>();
const heading = 3;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>

<template>
  <h3
    :id="id"
    tabindex="-1"
  >
    <a
      v-if="generate"
      class="header-achor"
      :href="`#${id}`"
    >
      #
    </a>
    <slot />
  </h3>
</template>
