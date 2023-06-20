<script setup lang="ts">
defineProps(["error"]);
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col gap-3 opacity-50 font-mono text-center">
      <p class="mt-30 mb-0">
        {{ error.statusCode }}
      </p>
      <p class="m-0">
        Ooops.
      </p>
      <p class="m-0">
        {{ error.message }}
      </p>
    </div>
  </NuxtLayout>
</template>
