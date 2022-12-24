<script lang="ts" setup>
import TagList from "./TagList.vue";

// 数据查询
const { data: list } = await useAsyncData("tags", () => queryContent("/blog/")
  .only(["tags"])
  .find());

// 有重复数据的标签列表
const temp = list.value?.reduce((prev, { tags }) => {
  prev.push(...tags);
  return prev;
}, []) as [];

// 标签列表
const tagList = unique(temp) as string[];

// 活跃标签列表
const { activeTags } = useActiveStates();
// 过滤器展示
const showFilter = ref(false);
// 路由
const route = useRoute();

// 过滤按钮点击
function filterClickHandler () {
  showFilter.value = !showFilter.value;
}

// 清空查询
function clear () {
  activeTags.value = [];
  navigateTo("/");
}

// 监听路由 query
watch(() => route.query, () => {
  if ("tag" in route.query) {
    showFilter.value = true;
  }
}, { immediate: true });
</script>

<template>
  <div class="mb-6">
    <div class="flex gap-2 mb-2">
      <div
        :class="['btn', showFilter ? 'sky-active' : 'sky-normal']"
        @click="filterClickHandler"
      >
        <div class="i-mdi-filter-plus-outline" />
      </div>
      <div
        v-show="showFilter"
        class="btn green-normal"
        @click="clear"
      >
        <div class="i-ant-design-clear-outlined" />
      </div>
    </div>
    <tag-list v-show="showFilter" :data="tagList" />
  </div>
</template>
