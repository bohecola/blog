<script lang="ts" setup>
import TagList from "./TagList.vue";

const { data: list } = await useAsyncData("tags", () => queryContent("/blog/")
  .only(["tags"])
  .find());

const temp = list.value?.reduce((prev, { tags }) => {
  prev.push(...tags);
  return prev;
}, []) as [];

const tagList = unique(temp) as string[];

const showFilter = ref(false);

function filterClickHandler () {
  showFilter.value = !showFilter.value;
}
</script>

<template>
  <div
    :class="[
      'px-4 py-1 mb-2 inline-block cursor-pointer rounded',
      showFilter ? 'filter-active' : 'filter-normal'
    ]"
    @click="filterClickHandler"
  >
    <div class="i-mdi-filter-plus-outline" />
  </div>
  <tag-list v-show="showFilter" class="mb-6" :data="tagList" />
</template>
