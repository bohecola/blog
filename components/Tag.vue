<script setup lang="ts">
import { isArray, isEmpty } from "lodash-es";

defineProps<{
  text: string
}>();

// 路由
const route = useRoute();

// 标签点击事件
function handleClick(currentTag: string) {
	// 计算父级路由的 path
	const parentPath = useParentPath();

	// 路由 query 参数
	const { tag } = route.query;

	// 数组化 tag 参数
	const queryTags = isArray(tag)
		? [...tag]
		: tag ? [tag] : [];

	// 当前 tag 在 queryTags 中的索引
	const index = queryTags.findIndex(e => e === currentTag);

	// currentTag 存在删除，不存在添加
	index < 0 ? queryTags.push(currentTag) : queryTags.splice(index, 1);

	// 创建目标路由 query 参数对象
	const query = !isEmpty(queryTags) ? { tag: queryTags } : {};

	// 导航
	navigateTo({
		path: parentPath,
		query
	});
}

// 是否活跃
function isActive(text: string): boolean {
	if (route.query.tag) {
		return route.query.tag.includes(text);
	}

	return false;
}
</script>

<template>
  <span
    :class="`tag select-none ${isActive(text) ? 'cyan-active' : 'cyan-normal'}`"
    @click="handleClick(text)"
  >
    #{{ text }}
  </span>
</template>
