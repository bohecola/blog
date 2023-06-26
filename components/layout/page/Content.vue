<template>
  <main class="px-7">
    <article class="main-content prose m-auto">
      <slot />
    </article>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 190px);
}
</style>
