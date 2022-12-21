<script lang="ts" setup>
import { Ref } from "vue";
import { LocationQueryValue } from "vue-router";
import { dateFormat, findIndex } from "@/utils";

// 分页数据
const page = ref(1);
const size = ref(5);

// 路由
const route = useRoute();
const router = useRouter();

// 查询参数
const currentTags: Ref<LocationQueryValue[]> = ref([]);

// 列表查询
const { data: list, refresh } = await useAsyncData(route.fullPath, () => {
  const { tags } = route.query;
  return queryContent("blog")
    .where({
      // @ts-ignore
      tags: {
        $in: tags
      }
    })
    .skip((page.value - 1) * size.value)
    .limit(size.value)
    .only(["title", "description", "date", "tags", "_path"])
    .sort({ date: -1 })
    .find();
});

// URL查询参数携带
function urlQuery () {
  navigateTo({
    path: "/",
    query: {
      tags: currentTags.value
    }
  });
}

// 标签点击
function tagClickHandler (clickedTag: string) {
  const { tags } = route.query;
  if (tags) {
    currentTags.value = Array.isArray(tags) ? tags : [tags];
  }
  const index = findIndex(currentTags.value, clickedTag);
  if (index < 0) {
    currentTags.value.push(clickedTag);
  } else {
    currentTags.value.splice(index, 1);
  }
  navigateTo({
    path: "/",
    query: {
      tags: [...currentTags.value]
    }
  });
}

// 标签是否活跃
function isTagActive (targetTag: string) {
  const { tags } = route.query;
  return !!(tags && tags.includes(targetTag));
}

// 活跃标签类名
const activeTagClass = (tag: string) => {
  return isTagActive(tag)
    ? "text-white bg-blue-500 hover:bg-blue-400"
    : "text-blue-400 bg-blue-100 dark:bg-opacity-20 hover:text-blue-500";
};

// 刷新
watch(() => route.query, async () => {
  // const { tags } = route.query;
  // currentTags.value = Array.isArray(tags) ? tags : [tags];
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
      <div class="mt-4 text-sm flex gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          :class="['badge', activeTagClass(tag)]"
          @click="tagClickHandler(tag)"
        >
          #{{ tag }}
        </span>
      </div>
    </li>
  </ul>
</template>
