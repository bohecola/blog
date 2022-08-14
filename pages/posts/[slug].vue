<template>
  <div class="post">
    <loading v-if="pending" />
    <template v-else>
      <h1>{{ info.title }}</h1>
      <p class="flex  items-center mt-0 opacity-60">
        <!-- 目录 -->
        <template v-if="info.category.name">
          <div class="mr-1" i-carbon-catalog />
          <nuxt-link
            :to="`/categories/${info.category.slug}`"
          >{{ info.category.name }}</nuxt-link>
        </template>
        <!-- 标签 -->
        <template v-if="info.tags.length">
          <div ml-2 mr-1 i-material-symbols-bookmarks-outline-rounded />
          <nuxt-link
            v-for="(t, i) in info.tags"
            class="mr-2"
            :key="t.slug"
            :to="`/tags/${t.slug}`"
          >{{ t.name }} <i v-if="i < info.tags.length - 1">, </i></nuxt-link>  
        </template>
      </p>
      <md-editor
        v-model="info.content"
        editor-id="md-editor"
        :theme="(editorTheme as Themes)"
        code-theme="atom"
        preview-theme="github"
        preview-only
      />
      <md-catalog
        class="custom-catalog lt-lg:hidden"
        editor-id="md-editor"
        :scroll-element="scrollElement"
        :theme="(editorTheme as Themes)"
        @onClick="onCatalogClick"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import MdEditor from "md-editor-v3";
import { Themes } from "md-editor-v3"
import "md-editor-v3/lib/style.css";
// 文档目录
const MdCatalog = MdEditor.MdCatalog;

// 主题色获取
const color = useColorMode();
// 编辑器主题设置
const editorTheme = computed(() => color.value);
// 文档元素
const scrollElement = ref(null);
// 编辑器配置
MdEditor.config({
  markedRenderer(renderer) {
    // 设置链接在新窗口打开
    renderer.link = (href, title, text) => {
      return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
    };
    return renderer;
  }
});
// URL哈希
function onCatalogClick(e, t) {
  history.replaceState({}, '', `${location.pathname}#${t.text}`);
}
// 路由参数
const { params } = useRoute();
// 数据获取
const { pending, data: info, refresh } = useFetch('/api/posts/info', {
  method: 'get',
  params: {
    slug: params.slug
  },
  lazy: true
});
// 页面挂载前
onBeforeMount(() => {
  refresh();
  history.replaceState({}, '', `${location.pathname}`);
  scrollElement.value = document.documentElement;
});
</script>

<style lang="scss">
.post {
  .custom-catalog {
    padding: .625rem 1rem;
    position: fixed;
    top: 8rem;
    right: 2rem;
    border-radius: 2px;
    background: rgba($color: #999, $alpha: 0.1);
  }
}
</style>