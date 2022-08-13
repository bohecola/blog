<template>
  <div class="tag">
    <ul>
      <li 
        v-for="tag in tags"
        :key="tag.id"
        class="mb-2"
      >
        <nuxt-link
          class="opacity-60 hover:opacity-75"
          :to="{
            name: 'tags-slug',
            params: {
              ...tag
            }
          }"
        >
          {{ `${tag.name}(${tag.count})` }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// 数据获取
const { data: tags } = useLazyAsyncData('tags', () => $fetch('/api/tags'));
</script>
