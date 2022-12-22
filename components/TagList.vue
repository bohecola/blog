<script lang="ts" setup>
import { findIndex, isInQueryParams } from "@/utils";
defineProps<{
  data: string[]
}>();

const route = useRoute();

const { activeTags } = useActiveStates();

onMounted(() => {
  const { tag } = route.query;
  if (tag) {
    activeTags.value = Array.isArray(tag)
      ? [...tag as string[]]
      : [tag as string];
  }
});

function tagClickHandler (clickedTag: string) {
  const tagIndex = findIndex(activeTags.value, clickedTag);
  tagIndex > -1
    ? activeTags.value.splice(tagIndex, 1)
    : activeTags.value.push(clickedTag);

  navigateTo({
    path: "/",
    query: activeTags.value.length > 0
      ? { tag: activeTags.value }
      : {}
  });
}
</script>

<template>
  <div class="flex gap-2 text-sm">
    <span
      v-for="tag in data"
      :key="tag"
      :class="[
        'tag',
        isInQueryParams('tag', tag)
          ? 'tag-active'
          : 'tag-normal'
      ]"
      @click="tagClickHandler(tag)"
    >
      #{{ tag }}
    </span>
  </div>
</template>
