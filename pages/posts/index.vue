<template>
  <div class="posts">
    <div v-if="pending">Loading...</div>
    <post-list v-else :posts="posts" />
    <pagination
      :page="page"
      :size="size"
      :total="data.pagination.total"
      @current-change="currentChange"
    />
  </div>
</template>

<script lang="ts" setup>
// 页数
const page = ref(1);
// 数量
const size = ref(10);

// 数据获取
const { pending, data } = useLazyAsyncData('posts', () => $fetch('/api/posts', {
  method: 'post',
  body: {
    page: page.value,
    size: size.value
  }
}));

// 数据
const posts = computed(() => {
  return data.value.list.map(item => {
    // 时间格式化
    item.createdAt = new Date(item.createdAt)
    .toDateString()
    .substring(4)
    .replace(/(?<=\d)\u0020(?=\d)/g, ', ')
    return item;
  });
});

// 刷新数据
const refresh = () => refreshNuxtData('posts');

// 翻页
function currentChange(val) {
  page.value = val;
  refresh();
}
</script>
