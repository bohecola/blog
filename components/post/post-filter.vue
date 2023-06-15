<script lang="ts" setup>
import TagList from "../tag-list.vue";
const props = withDefaults(defineProps<{ query?: string }>(), {
  query: "blog"
});

// 数据查询
const { data: list } = await useAsyncData(`tags-${props.query}`, () => queryContent(props.query)
  .only("tags")
  .find());

// 有重复数据的标签列表
const temp = list.value?.reduce((prev, { tags }) => {
  prev.push(...tags);
  return prev;
}, [] as string[]);

// 标签列表
const tagList = Array.from(new Set(temp));

// 过滤按钮活跃状态
const filterActive = ref(false);

// 路由
const route = useRoute();

// 过滤按钮点击
function handleFilterClick() {
  filterActive.value = !filterActive.value;
}

// 清空查询
function clear() {
  navigateTo(route.path);
}

// 监听路由 query
watch(() => route.query, () => {
  if ("tag" in route.query) {
    filterActive.value = true;
  }
}, { immediate: true });
</script>

<template>
  <div class="mb-6">
    <div class="flex gap-2 mb-2">
      <div :class="['btn', filterActive ? 'sky-active' : 'sky-normal']" @click="handleFilterClick">
        <div class="i-mdi-filter-plus-outline" />
      </div>
      <div v-show="filterActive" class="btn green-normal" @click="clear">
        <div class="i-ant-design-clear-outlined" />
      </div>
    </div>
    <tag-list v-show="filterActive" :data="tagList" />
  </div>
</template>
