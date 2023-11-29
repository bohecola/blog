<template>
  <post-list
    query="blog"
    :filter="true"
  />
</template>

<script lang="ts" setup>
useHead({ title: "Blog" });
</script>
