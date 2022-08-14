<template>
  <div class="post">
    <loading v-if="pending" />
    <template v-else>
      <!-- 标题 -->
      <h1>{{ info.title }}</h1>
      <!-- 编辑器 -->
      <md-editor
        v-model="info.content"
        editor-id="md-editor"
        :theme="(editorTheme as Themes)"
        code-theme="atom"
        preview-theme="github"
        preview-only
      />
      <!-- 标题目录 -->
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
// 路由
const route = useRoute();
// 数据获取
const { pending, data: info } = useLazyAsyncData('post-info', () => $fetch('/api/posts/info', {
  method: 'get',
  params: {
    slug: route.params.slug
  }
}));

// 刷新数据
const refresh = () => refreshNuxtData('post-info');
refresh();

// 页面挂载前
onBeforeMount(() => {
  // 刷新清空 URL哈希 (临时处理)
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