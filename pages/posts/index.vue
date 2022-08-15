<template>
  <div class="posts">
    <loading v-if="pending" />
    <template v-else>
      <h1 class="mt-0 opacity-60">Posts</h1>
      <!-- 列表 -->
      <post-list :posts="posts.list" />
      <!-- 分页 -->
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
// 文档标题
useHead({ title: 'Posts' });
const { page, size, setPage } = usePagination();

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

const { pending, data: posts, refresh } = useAsyncData('posts-page', () => $fetch('/api/posts/page', {
  method: 'post',
  body: {
    page: page.value,
    size: size.value
  }
}));

// 翻页
function currentChange(val: number) {
  setPage(val);
  refresh();
}
</script>
