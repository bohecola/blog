<template>
  <img
    class="w-24 h-24 object-cover border !rounded-[50%]"
    :src="url"
    alt="avatar"
  >
</template>

<script lang="ts" setup>
defineProps<{url: string}>();
</script>
