<script lang="ts" setup>
import { LocationQueryValue } from "vue-router";
import { unique, findIndex } from "@/utils";

const { data: list } = await useAsyncData("tags", () => queryContent("/blog/")
  .only(["tags"])
  .find());

const temp = list.value?.reduce((prev, { tags }) => {
  prev.push(...tags);
  return prev;
}, []) as [];

const tagList = unique(temp);

const route = useRoute();
function isTagActive (targetTag: string) {
  const { tags } = route.query;
  return !!(tags && tags.includes(targetTag));
}

// 活跃标签类名
const activeTagClass = (tag: string) => {
  return isTagActive(tag)
    ? "text-white bg-blue-500 hover:bg-blue-400"
    : "text-blue-400 bg-blue-100 dark:bg-opacity-20 hover:text-blue-500";
};

const currentTags = ref<string[]>([]);

onMounted(() => {
  const { tags } = route.query;
  if (tags) {
    if (Array.isArray(tags)) {
      currentTags.value = tags.map(e => e!.toString());
    } else {
      currentTags.value = [tags.toString()];
    }
  }
});

function tagClickHandler (clickedTag: string) {
  const index = findIndex(currentTags.value, clickedTag);
  if (index < 0) {
    currentTags.value.push(clickedTag);
  } else {
    currentTags.value.splice(index, 1);
  }
  navigateTo({
    path: "/",
    [currentTags.value.length && "query"]: {
      tags: currentTags.value
    }
  });

  // isTagActive(clickedTag)
  //   ? navigateTo("/") && (tags.value = [])
  //   : navigateTo({
  //     path: "/",
  //     query: { tags: tags.value }
  //   });
}
</script>

<template>
  <div class="mb-6 flex gap-2 text-sm">
    <span
      v-for="tag in tagList"
      :key="tag"
      :class="['badge', activeTagClass(tag)]"
      @click="tagClickHandler(tag)"
    >
      #{{ tag }}
    </span>
  </div>
</template>
