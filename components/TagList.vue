<script setup lang="ts">
defineProps<{
  tags: string[]
}>();
</script>

<template>
  <div class="flex flex-wrap gap-2 text-sm">
    <Tag
      v-for="(item, index) in tags"
      :key="index"
      :text="item"
    />
  </div>
</template>
