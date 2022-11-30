<template>
  <div class="app-topbar">
    <logo />
    <div class="spacer" />
    <div class="app-topbar__right">
      <template
        v-for="(item, index) of topbars"
        :key="index"
      >
        <nuxt-link
          v-if="[0, 1, 2, 3, 4].includes(index)"
          :to="item.href"
          :title="item.title"
        >
          <span v-if="item.text" class="lt-md:hidden">{{ item.text }}</span>
          <div v-if="index === 0" md:hidden i-ri-article-line />
          <div v-else-if="index === 1" md:hidden i-ri-book-line />
          <div v-else-if="index === 2" md:hidden i-carbon-tag-group />
          <div v-else-if="index === 3" md:hidden i-carbon-archive />
          <div v-else-if="index === 4" md:hidden i-carbon-link />
        </nuxt-link>

        <nuxt-link
          v-if="[5].includes(index)"
          :title="item.title"
          :to="item.href"
          target="_blank"
          lt-md:hidden
        >
          <div v-if="index === 5" i-carbon-logo-github />
          <div v-else-if="index === 6" lt-md:hidden i-la-rss-square />
        </nuxt-link>

        <nuxt-link v-if="index === topbars.length - 1" class="select-none">
          <dark-toggle :title="item.title" />
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const topbars = ref([
  { href: '/posts', title: 'Blog', text: 'Post' },
  { href: '/categories', title: 'Categories', text: '目录' },
  { href: '/tags', title: 'Tags', text: '标签' },
  { href: '/records', title: 'Records', text: '归档' },
  { href: '/links', title: 'Links', text: 'Links' },
  { href: 'https://github.com/bohecola', title: 'Github', text: '' },
  { href: '', title: 'RSS', text: '' },
  { href: '', title: 'Toggle Color Scheme', text: '' }
])
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
      opacity: .6;
      color: inherit;
      transition: opacity .2s ease;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }

    & > * {
      margin: auto;
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
