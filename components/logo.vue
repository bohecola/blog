<template>
  <nuxt-link to="/" class="logo">
    <img dark:hidden src="/logo.svg" />
    <img light:hidden src="/logo-dark.svg" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    margin: 1.5rem;
    user-select: none;
    position: absolute;
  }
</style>