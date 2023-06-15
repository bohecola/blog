<script lang="ts" setup>
import { isArray, isEmpty } from "lodash-es";

defineProps<{
  data: string[]
}>();

// 路由
const route = useRoute();

// 标签点击
function handleTagClick(tagName: string) {
  // 查询路径
  const parentPath = useParentPath();
  // 当前 Query Tag 参数
  const { tag } = route.query;
  const currentQueryTags = tag
    ? isArray(tag) ? [...tag] : [tag]
    : [];

  // 目标 Query Tag 参数
  const targetQueryTags = currentQueryTags.includes(tagName)
    ? currentQueryTags.filter(e => e !== tagName)
    : [...currentQueryTags, tagName];

  // 目标 Query 参数
  const targetQuery = {};
  if (!isEmpty(targetQueryTags)) {
    Object.assign(targetQuery, { tag: targetQueryTags });
  }

  // 导航
  navigateTo({
    path: parentPath,
    query: targetQuery
  });
}
</script>

<template>
  <div class="flex gap-2 text-sm">
    <span v-for="tagName in data" :key="tagName" :class="[
      'tag select-none',
      route.query.tag && route.query.tag.includes(tagName)
        ? 'cyan-active'
        : 'cyan-normal'
    ]" @click="handleTagClick(tagName)">
      #{{ tagName }}
    </span>
  </div>
</template>
