<template>
  <ul>
    <post-item
      v-for="post of list"
      :key="post.id"
      :post="post"
    />
  </ul>
  <!-- 加载中 -->
  <loading v-if="pending" />
  <!-- 分页 -->
  <pagination
    v-else
    :page="page"
    :size="size"
    :total="total"
    @current-change="currentChange"
  />
</template>

<script lang="ts" setup>
const { page, size, setPage } = usePagination();
const { posts, setPosts, loadMore } = usePosts();

// 数据获取
// 使用 useFetch 执行 refresh() 的时候不刷新 RequestBody
// 而使用 useAsyncData 得到的 refresh 可以刷新 RequestBody
// const { pending, data: posts, refresh } = useFetch(`/api/posts/page`, {
//   method: 'post',
//   body: {
//     page: page.value,
//     size: size.value
//   }
// });

const { pending, data, refresh } = useAsyncData('posts-page', () => $fetch('/api/posts/page', {
  method: 'post',
  body: {
    page: page.value,
    size: size.value
  }
}));

const list = computed(() => {
  // 第一页时，设置初始值
  if (page.value === 1) setPosts(data.value?.list);
  // 列表
  return posts.value;
});

const total = computed(() => data.value?.pagination.total);
// 翻页
async function currentChange(val: number) {
  // 下一页
  setPage(val);
  // 刷新
  await refresh();
  // 加载更多
  loadMore(data.value.list);
}
</script>
