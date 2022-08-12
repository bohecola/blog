<template>
  <article>
    <div class="prose m-auto">
      <div v-if="pending">Loading...</div>
      <post-list v-else :posts="posts" />
      <button v-if="page < pageCount" w-10 mr-1 @click="next"> + </button>
      <button v-if="page > 1" w-10 @click="previous"> - </button>
    </div>
  </article>
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
    .replace(/(?<=\d)\u0020(?=\d)\d/g, ', ')
    return item;
  })
});

// 总页数
const pageCount = computed(() => Math.ceil(data.value.pagination.total / size.value));

// 刷新数据
const refresh = () => refreshNuxtData('posts');

// 上一页
function previous() {
  page.value--;
  refresh();
}

// 下一页
function next() {
  page.value++;
  refresh();
}
</script>

<style lang="scss">
.prose {
  ol, ul {
    list-style-type: none;
  }
}
</style>