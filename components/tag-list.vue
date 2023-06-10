<script lang="ts" setup>
import { findIndex, isInQueryParams } from "@/utils";
defineProps<{
  data: string[]
}>();

// 路由
const route = useRoute();

// 活跃标签
const { activeTags } = useActiveStates();

// 挂载
onMounted(() => {
  const { tag } = route.query;
  if (tag) {
    activeTags.value = Array.isArray(tag)
      ? [...tag as string[]]
      : [tag as string];
  }
});

// 标签点击
function tagClickHandler (clickedTag: string) {
  const tagIndex = findIndex(activeTags.value, clickedTag);

  if (tagIndex > -1) {
    activeTags.value.splice(tagIndex, 1);
  } else {
    activeTags.value.push(clickedTag);
  }

  const parentPath = useParentPath();

  navigateTo({
    path: parentPath,
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
        'tag select-none',
        isInQueryParams('tag', tag)
          ? 'cyan-active'
          : 'cyan-normal'
      ]"
      @click="tagClickHandler(tag)"
    >
      #{{ tag }}
    </span>
  </div>
</template>
