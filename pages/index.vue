<template>
  <div class="profile">
    <loading v-if="pending" />
    <template v-else>
      <h1>你好</h1>
      <img class="w-25 h-25 object-cover" :src="profile.avatar" alt="avatar" />
      <p>我是 {{ profile.nickName }}, 很高兴认识你.</p>
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
