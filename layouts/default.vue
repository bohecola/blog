<template>
  <div class="app">
    <topbar />
    <main class="px-7">
      <!-- 正文 -->
      <article class="main-content prose m-auto">
        <slot />
      </article>
      <!-- 返回按钮 -->
      <div class="prose m-auto my-8">
        <nuxt-link
          v-if="$route.path.lastIndexOf('/') > 0"
          class="font-mono opacity-50 hover:opacity-75 cursor-pointer"
          @click="$router.go(-1)"
        >
          cd ..
        </nuxt-link>
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
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 190px);
}
</style>
