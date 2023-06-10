<template>
  <div class="app">
    <top-bar />
    <main class="px-7">
      <!-- 正文 -->
      <article class="main-content prose m-auto">
        <slot />
      </article>
      <!-- 返回按钮 -->
      <div class="prose m-auto my-8">
        <go-back />
      </div>
      <!-- 底部 -->
      <div class="prose m-auto mb-4">
        <p class="text-sm">
          <span class="opacity-60 mr-1">© 2021-PRESENT COLAX</span>
          <nuxt-link
            class="opacity-60 hover:opacity-75"
            to="https://beian.miit.gov.cn"
            target="_blank"
          >
            陕ICP备2022001579号-2
          </nuxt-link>
        </p>
      </div>
    </main>
    <ClientOnly>
      <to-top />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 190px);
}
</style>
