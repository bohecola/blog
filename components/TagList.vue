<script setup lang="ts">
defineProps<{
  data: string[]
}>();
</script>

<template>
  <div class="flex flex-wrap gap-2 text-sm">
    <Tag
      v-for="(item, index) in data"
      :key="index"
      :text="item"
    />
  </div>
</template>
