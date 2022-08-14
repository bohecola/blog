<template>
  <div class="profile">
    <loading v-if="pending" />
    <template v-else>
      <h1>Hello World</h1>
      <img class="w-25 h-25" :src="profile.avatar" alt="avatar" />
      <p>Hi, I'm {{ profile.nickName }}, nice to meet you.</p>
      <p></p>
      <p>{{ profile.desc }}</p>
      <p>
        Email: 
        <nuxt-link :to="`mailto:${profile.email}`" target="_blank">{{ profile.email }}</nuxt-link>
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
const { pending, data: profile } = useAsyncData('profile', () => $fetch('/api/profile'));
</script>
