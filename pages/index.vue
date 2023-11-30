<template>
  <post-list
    query="blog"
    :filter="true"
  />
</template>

<script lang="ts" setup>
useHead({ title: "Post" });
</script>
