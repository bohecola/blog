<template>
  <div class="posts">
    <loading v-if="pending" />
    <template v-if="posts">
      <h1 class="mt-0 opacity-60">
        {{ ($route.params.slug as string).toUpperCase().replace('-', ' ') }}
      </h1>
      <!-- 列表 -->
      <post-list :posts="posts.list" />
    </template>
  </div>
</template>

<script lang="ts" setup>
// 页数
const page = ref(1);
// 数量
const size = ref(100);
// 路由
const route = useRoute();
// 文档标题
useHead({ title: route.params.slug as string });

// 数据获取
const { pending, data: posts } = useFetch('/api/posts/page', {
  method: 'post',
  key: route.params.slug as string,
  body: {
    page: page.value,
    size: size.value,
    tagSlugList: [route.params.slug]
  }
});
</script>
