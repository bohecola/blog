<template>
  <div class="app">
    <topbar />
    <main class="py-10 px-7">
      <!-- 正文 -->
      <article>
        <slot />
      </article>
      <!-- 返回 -->
      <div class="prose m-auto my-8">
        <nuxt-link
          v-if="$route.path.lastIndexOf('/') > 0"
          class="font-mono opacity-50 hover:opacity-75 cursor-pointer"
          @click="$router.go(-1)"
        >
          cd ..
        </nuxt-link>
      </div>
      <!-- 备案 -->
      <div class="prose m-auto">
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

<style lang="scss">
.app {
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    backdrop-filter: blur(10px);
  }
}
.prose {
  &>:first-child {
    margin-top: 0;
  }
  &>:last-child {
    margin-bottom: 0;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    font-weight: inherit;
    text-decoration: none;
    transition: border .3s ease-in-out;
    border-bottom: 1px solid rgba(125,125,125,.3);
    &:hover {
      border-color: rgb(125,125,125);;
    }
  }
}
</style>
