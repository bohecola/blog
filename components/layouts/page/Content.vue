<template>
  <main class="px-7">
    <article class="main-content prose m-auto">
      <slot />
    </article>

    <div class="prose m-auto my-8">
      <LayoutsPageGoBack />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 190px);
}
</style>
