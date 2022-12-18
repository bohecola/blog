<script lang="ts" setup>
defineProps({
  title: String,
  desc: String
});
</script>

<template>
  <h2>{{ title }}</h2>
  <p v-if="desc">
    {{ desc }}
  </p>
</template>

<style lang="scss" scoped>

</style>
