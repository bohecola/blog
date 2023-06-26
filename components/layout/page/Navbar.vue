<template>
  <header class="app-topbar">
    <!-- <logo /> -->
    <div class="spacer" />
    <div class="app-topbar__right">
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
        <span class="lt-md:hidden">{{ link.title }}</span>
        <div :class="['md:hidden', link.icon]" />
      </nuxt-link>

      <nuxt-link
        title="Github"
        to="https://github.com/bohecola"
        target="_blank"
      >
        <div i-carbon-logo-github />
      </nuxt-link>

      <nuxt-link class="select-none">
        <LayoutPageThemeSwitcher title="Toggle Color Scheme" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { navigation } = useAppConfig();
</script>

<style lang="scss" scoped>
.app-topbar {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
  line-height: 1.5rem;
  position: relative;

  &__right {
    display: grid;
    grid-gap: 1.2rem;
    grid-auto-flow: column;

    a {
      color: inherit;
      opacity: .6;
      text-decoration: none;
      transition: opacity .2s ease;
      cursor: pointer;
      &:hover, &.active {
        opacity: 1;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .app-topbar__right {
      a {
        & > div {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
