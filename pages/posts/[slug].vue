<template>
  <div class="post">
    <loading v-if="pending" />
    <template v-else>
      <!-- 标题 -->
      <h1>{{ info.title }}</h1>
      <!-- 编辑器-预览模式 -->
      <md-editor
        v-model="info.content"
        editor-id="md-editor"
        :theme="(editorTheme as Themes)"
        code-theme="atom"
        preview-theme="github"
        preview-only
      />
      <!-- 导航目录 -->
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

// 路由
const route = useRoute();
// 文档标题
useHead({ title: route.params.slug as string });
// 数据获取
const { data: info, pending } = useFetch('/api/posts/info', { 
  key: route.params.slug as string,
  params: {
    slug: route.params.slug
  }  
});

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

// 目录元素
const MdCatalog = MdEditor.MdCatalog;
// 主题色获取
const color = useColorMode();
// 编辑器主题设置
const editorTheme = computed(() => color.value);
// 滚动元素
const scrollElement = ref(null);
// URL哈希
function onCatalogClick(e, t) {
  history.replaceState({}, '', `${location.pathname}#${t.text}`);
}
// 页面挂载前
onBeforeMount(() => {
  // 滚动元素设置
  scrollElement.value = document.documentElement;
});
</script>

<style lang="scss">
.post {
  .custom-catalog {
    padding: .625rem 0;
    position: fixed;
    top: 5.5rem;
    right: 1rem;
    height: calc(100% - 5.5rem);
    border-left: 1px dashed #ccc;
    .md-catalog-link {
      padding: .5rem 1rem;
    }
  }
}
</style>
