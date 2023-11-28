<script lang="ts" setup>
import { dateFormat } from "@/utils";
const props = withDefaults(defineProps<{ query?: string }>(), { query: "blog" });

// 路由
const route = useRoute();

// 列表查询
const { data: list, refresh } = await useAsyncData(route.fullPath, () => {
	const { tag } = route.query;
	return queryContent(props.query)
		.where({
			// @ts-ignore
			tags: { $in: tag }
		})
		.only(["title", "description", "date", "tags", "_path"])
		.sort({ date: -1 })
		.find();
});

// 刷新
watch(() => route.query, async () => {
	await refresh();
});
</script>

<template>
  <ul class="post-list">
    <!-- 列表项 -->
    <li
      v-for="post in list"
      :key="post._path"
      class="mt-2 mb-6"
    >
      <!-- 主体信息 -->
      <nuxt-link :to="post._path">
        <div class="flex items-center mb-2">
          <span class="text-lg opacity-70 mr-2 hover:opacity-100">
            {{ post.title }}
          </span>

          <span class="text-sm opacity-50">
            {{ dateFormat(post.date) }}
          </span>
        </div>
      </nuxt-link>

      <!-- 标签 -->
      <tag-list :data="post.tags" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul.post-list {
  list-style: none;
  padding-left: 0;
}
</style>
