<template>
  <header class="relative flex p-8">
    <div class="flex-1" />
    <div class="flex gap-4">
      <!-- 导航 -->
      <nuxt-link
        v-for="link in navigation"
        :key="link.path"
        :to="link.path"
        :class="{
          active: link.path !== '/'
            ? $route.path.includes(link.path)
            : $route.path === '/' || $route.path.includes('/blog/')
        }"
      >
        <span class="max-md:hidden">{{ link.title }}</span>
        <span :class="`md:hidden ${link.icon}`" />
      </nuxt-link>

      <!-- Github -->
      <nuxt-link
        title="Github"
        to="https://github.com/bohecola"
        target="_blank"
      >
        <span class="i-carbon-logo-github" />
      </nuxt-link>

      <!-- 主题切换 -->
      <nuxt-link>
        <ThemeSwitcher title="Toggle Color Scheme" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
const navigation = [
	{ path: "/", title: "Blog", icon: "i-ri-article-line" },
	{ path: "/english", title: "English", icon: "i-material-symbols-book-2-outline-rounded" },
	{ path: "/about", title: "About", icon: "i-carbon-user-profile" }
];
</script>

<style lang="scss" scoped>
header {
  a {
    opacity: .7;
    transition: opacity .2s ease;
    &:hover, &.active {
      opacity: 1;
    }
  }
}
</style>
