<template>
  <nuxt-layout name="default">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Cola` : "Cola"
});
</script>
