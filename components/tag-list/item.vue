<script setup lang="ts">
import { isArray, isEmpty } from "lodash-es";

defineProps<{
  text: string
}>();

const route = useRoute();

function handleClick(text: string) {
	// 查询路径
	const parentPath = useParentPath();

	// Query Tags
	const { tag } = route.query;

	const queryTags = isArray(tag)
		? [...tag]
		: tag ? [tag] : [];

	const index = queryTags.findIndex(e => e === text);

	index < 0 ? queryTags.push(text) : queryTags.splice(index, 1);

	// 目标 route.query 对象
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
    :class="['tag', 'select-none', isActive(text) ? 'cyan-active' : 'cyan-normal']"
    @click="handleClick(text)"
  >
    #{{ text }}
  </span>
</template>
