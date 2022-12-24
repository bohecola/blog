<script lang="ts" setup>
import { dateFormat } from "@/utils";

// 分页数据
const page = ref(1);
const size = ref(5);

// 路由
const route = useRoute();

// 列表查询
const { data: list, refresh } = await useAsyncData(route.fullPath, () => {
  const { tag } = route.query;
  return queryContent("blog")
    .where({
      // @ts-ignore
      tags: {
        $in: tag
      }
    })
    // .skip((page.value - 1) * size.value)
    // .limit(size.value)
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
    <li v-for="post in list" :key="post._path" class="mt-2 mb-6">
      <!-- 主体信息 -->
      <nuxt-link :to="post._path">
        <div class="text-sm mb-2">
          <div class="text-lg leading-1.2em">
            {{ post.title }}
          </div>
          <div class="desc mt-2 opacity-70">
            {{ post.description }}
          </div>
          <div class="time mt-1 opacity-70">
            {{ dateFormat(post.date) }}
          </div>
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
