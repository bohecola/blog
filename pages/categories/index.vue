<template>
  <div class="category">
    <div v-if="pending">Loading...</div>
    <template v-else>
      <ul>
        <li 
          v-for="category in categories"
          :key="category.id"
          class="mb-2"
        >
          <nuxt-link
            class="opacity-60 hover:opacity-75"
            :to="{
              name: 'categories-slug',
              params: {
                slug: category.name,
                id: category.id
              }
            }"
          >
            {{ `${category.name}(${category.count})` }}
          </nuxt-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts" setup>
// 数据获取
const { pending, data: categories } = useLazyAsyncData('categories', () => $fetch('/api/categories', {
  method: 'get'
}));
</script>
