<template>
  <nuxt-link
    v-if="$route.path.lastIndexOf('/') > 0"
    class="font-mono opacity-50 hover:opacity-75 cursor-pointer"
    @click="$router.push('/')"
  >
    cd ..
  </nuxt-link>
</template>
