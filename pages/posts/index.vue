<template>
  <div class="posts">
    <div v-if="pending">Loading...</div>
    <template v-else>
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

// 数据获取
const { pending, data: posts } = useLazyAsyncData('posts', () => $fetch('/api/posts', {
  method: 'post',
  body: {
    page: page.value,
    size: size.value
  }
}));

// 刷新数据
const refresh = () => refreshNuxtData('posts');

// 翻页
function currentChange(val) {
  page.value = val;
  refresh();
}
</script>
