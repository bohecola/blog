<script lang="ts" setup>
// 日期格式化
import { dateFormat } from "@/utils";
import type { QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";

const config = useRuntimeConfig();
const isDev = config.public.env === "development";

// 默认参数
const props = withDefaults(
	defineProps<{ query?: string, filter?: boolean }>(),
	{
		query: "blog",
		filter: false
	}
);

// 路由
const route = useRoute();

// 文章列表查询
const { data: list, refresh } = await useAsyncData(route.fullPath, () => {
	const { tag } = route.query;

	const query: QueryBuilderWhere = {
		// @ts-ignore
		tags: { $in: tag }
	};

	if (!isDev) {
		Reflect.set(query, "draft", { $ne: true });
	}

	return queryContent(props.query)
		.where(query)
		.only(["title", "description", "date", "tags", "draft", "_path"])
		.sort({ date: -1 })
		.find();
});

// 路由 query 参数变化后刷新
watch(() => route.query, async () => {
	await refresh();
});
</script>

<template>
  <div class="not-prose">
    <PostFilter :query="query" />
    <!-- 文章列表 -->
    <ul>
      <li
        v-for="post in list"
        :key="post._path"
        class="mt-2 mb-6"
      >
        <nuxt-link :to="post._path">
          <div class="flex flex-col gap-1 mb-2 opacity-80 hover:opacity-100 md:flex-row md:gap-2 md:items-center">
            <!-- 文章标题 -->
            <span class="text-lg">
              {{ post.title }}
            </span>
            <!-- 写作时间 -->
            <span class="text-sm opacity-70">
              {{ dateFormat(post.date) }}
            </span>
          </div>
        </nuxt-link>

        <!-- 标签 -->
        <TagList :tags="post.tags" />
      </li>
    </ul>
  </div>
</template>
