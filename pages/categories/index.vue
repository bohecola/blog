<template>
  <div class="category">
    <loading v-if="pending" />
    <template v-else>
      <h1 class="mt-0 opacity-60">目录</h1>
      <ul>
        <li 
          v-for="category in categories"
          :key="category.id"
          class="mb-2">
          <nuxt-link
            class="opacity-60 hover:opacity-75"
            :to="`/categories/${category.slug}`">
            {{ `${category.name}(${category.count})` }}
          </nuxt-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts" setup>
// 文档标题
useHead({ title: 'categories' });
// 数据获取
const { data: categories, pending } = useFetch('/api/categories');
</script>
