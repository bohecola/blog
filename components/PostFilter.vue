<script lang="ts" setup>
import type { QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";

// 默认参数
const props = withDefaults(
	defineProps<{ query?: string }>(),
	{ query: "blog" }
);

const config = useRuntimeConfig();
const isDev = config.public.env === "development";

// 标签数据查询
const { data: list } = await useAsyncData(`tags-${props.query}`, () => {
	const query: QueryBuilderWhere = {};

	if (!isDev) {
		Reflect.set(query, "draft", { $ne: true });
	}
	return queryContent(props.query)
		.where(query)
		.only("tags")
		.find();
});

// 有重复数据的标签列表
const temp = list.value?.reduce((prev, { tags }) => {
	prev.push(...tags);
	return prev;
}, [] as string[]);

// 标签列表
const tags = Array.from(new Set(temp));

// 过滤按钮活跃状态
const filterActive = ref(true);

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
      <button
        :class="`btn ${filterActive ? 'sky-active' : 'sky-normal'}`"
        @click="handleFilterClick"
      >
        <span class="i-mdi-filter-plus-outline" />
      </button>
      <button
        v-show="filterActive"
        class="btn green-normal"
        @click="clear"
      >
        <span class="i-ant-design-clear-outlined" />
      </button>
    </div>
    <TagList
      v-show="filterActive"
      :tags="tags"
    />
  </div>
</template>
