<template>
  <nuxt-layout name="default">
    <NuxtLoadingIndicator />
    <ContentDoc class="prose m-auto" />
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Cola` : "Cola";
  }
});
</script>
