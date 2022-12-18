<script lang="ts" setup>
const page = ref(1);
const size = ref(5);

const articles = await queryContent("/blog/")
  .skip((page.value - 1) * size.value)
  .limit(size.value)
  .sort({ date: -1 })
  .find();
</script>

<template>
  <ul>
    <nuxt-link
      v-for="post in articles"
      :key="post._id"
      :to="post._path"
    >
      <li class="p-2 hover:bg-$block-bg">
        <h2 class="my-2 text-2xl font-500">
          {{ post.title }}
        </h2>
        <p class="my-4px opacity-70">
          {{ post.description }}
        </p>
        <div class="flex lg-items-center opacity-70 text-sm">
          <span class="i-material-symbols-calendar-month-outline" />
          <span class="ml-4px">{{ post.date.slice(0, 10) }}</span>
        </div>
      </li>
    </nuxt-link>
  </ul>
</template>
