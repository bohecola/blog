<template>
  <div class="posts">
    <loading v-if="pending" />
    <template v-else>
      <h1 class="mt-0 opacity-60">{{ ($route.params.slug as string).toUpperCase() }}</h1>
      <post-list :posts="posts.list" />
      <pagination
        :page="page"
        :size="size"
        :total="posts.pagination.total"
        @current-change="currentChange"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
// 页数
const page = ref(1);
// 数量
const size = ref(10);

const route = useRoute();

// 数据获取
const { pending, data: posts } = useLazyAsyncData('posts', () => $fetch('/api/posts/page', {
  method: 'post',
  body: {
    page: page.value,
    size: size.value,
    tagSlugList: [route.params.slug]
  }
}));

// 刷新数据
const refresh = () => refreshNuxtData('posts');

onMounted(() => refresh());

// 翻页
function currentChange(val) {
  page.value = val;
  refresh();
}
</script>
