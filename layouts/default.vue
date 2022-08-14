<template>
  <div class="app">
    <header>
      <topbar />
    </header>
    <main class="py-10 px-7">
      <!-- 正文 -->
      <article>
        <div class="prose m-auto">
          <slot></slot>
        </div>
      </article>
      <!-- 返回 -->
      <div class="prose m-auto my-8">
        <!-- 正常回退上一层级路由 -->
        <nuxt-link
          v-if="$route.path !== '/' && !$route.path.includes('/posts/')"
          class="font-mono opacity-50 hover:opacity-75"
          :to="backTo">
          cd ..
        </nuxt-link>
        <!-- /posts/xxx 由于from路由不明确, 所以: 回退历史记录上一级 -->
        <nuxt-link
          v-if="$route.path.includes('/posts/')"
          class="font-mono opacity-50 hover:opacity-75 cursor-pointer"
          @click="$router.go(-1)"
        >
          cd ..
        </nuxt-link>
      </div>
      <!-- 备案 -->
      <div class="prose m-auto">      
        <p class="text-sm">
          <span class="opacity-60 mr-1">© 2021-PRESENT Candy</span>
          <nuxt-link
            class="opacity-60 hover:opacity-75"
            to="https://beian.miit.gov.cn"
            target="_blank">
            陕ICP备2022001579号
          </nuxt-link>
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
// 路由
const route = useRoute();

// 路由器
const router = useRouter();

// 返回路径
const backTo = ref('');

// 监听路由变化
watch(
  () => route.fullPath, 
  (newVal, oldVal) => {
    // 上级路径
    const upperPath = newVal.substring(0, newVal.lastIndexOf('/')) || '/';
    // 返回
    backTo.value = upperPath;
  }, { immediate: true }
);
</script>

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