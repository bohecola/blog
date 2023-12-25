<script setup lang="ts">
const postExist = usePostExist();
const isTocBtnActive = useTocBtnActive();
</script>

<template>
  <nuxt-link
    v-if="postExist"
    :class="`cursor-pointer lg:hidden ${isTocBtnActive ? '!opacity-100' : ''}`"
    @click="isTocBtnActive = !isTocBtnActive"
  >
    <span class="i-material-symbols-menu-rounded" />
  </nuxt-link>
</template>
