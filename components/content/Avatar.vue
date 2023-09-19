<template>
  <img
    class="avatar"
    :src="url"
    alt="avatar"
  >
</template>

<script lang="ts" setup>
defineProps<{url: string}>();
</script>

<style lang="scss" scoped>
.avatar {
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 4px;
  border: 1px solid #eee;
  object-fit: cover;
}
</style>
