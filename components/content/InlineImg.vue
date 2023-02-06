<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
});
</script>

<template>
  <img class="inline-img" :src="src" :alt="alt">
</template>

<style lang="scss" scoped>
  .inline-img {
    margin-bottom: -2px;
    width: 20px;
    height: 20px;
  }
</style>
