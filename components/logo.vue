<template>
  <nuxt-link to="/" class="logo">
    <img src="/logo.svg">
  </nuxt-link>
</template>

<style lang="scss" scoped>
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    margin: 1.5rem;
    user-select: none;
    position: absolute;
    border-radius: 50%;
    transition: transform 0.3s ease-in;
    &:hover {
      transform: rotate(360deg);
    }
  }
</style>
