<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({ titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Cola` : "Cola" });
</script>
