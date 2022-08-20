<template>
  <div class="profile">
    <loading v-if="pending" />
    <template v-else>
      <h1>Hello</h1>
      <img class="w-25 h-25 object-cover" :src="profile.avatar" alt="avatar" />
      <p>I'm {{ profile.nickName }}, nice to meet you.</p>
      <p>{{ profile.desc }}</p>
      <p>
        Email: 
        <nuxt-link :to="`mailto:${profile.email}`" target="_blank">{{ profile.email }}</nuxt-link>
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
// 简介数据
const { pending, data: profile } = useFetch('/api/profile');
// 文档标题
useHead({ title: 'Intro' });
</script>
