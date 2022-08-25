<template>
  <div class="post-info">
    <loading v-if="pending" />
    <template v-if="info">
      <!-- 标题 -->
      <h1 class="mt-0 mb-0">{{ info.title }}</h1>
      <section class="panel mt-2 mb-2 opacity-60">
        <p class="mt-0 flex items-center justify-between">
          <span>{{ info.createdAt }}</span>
          <span class="flex items-center">
            <template v-if="info.category">
              <span i-ri-book-line />
              <nuxt-link
                class="ml-1"
                :to="`/categories/${info.category.slug}`"
              >{{ info.category.name }}</nuxt-link>
            </template>

            <template v-if="info.tags.length">
              <span ml-2 i-carbon-tag-group />
              <nuxt-link
                v-for="t in info.tags"
                :key="t.slug"
                class="ml-2"
                :to="`/tags/${t.slug}`"
              >{{ t.name }}</nuxt-link>
            </template>
          </span>
        </p>
        <p v-if="info.desc" class="mt-0 mb-0 desc">{{ info.desc }}</p>
      </section>
      
      <!-- 编辑器-预览模式 -->
      <md-editor
        v-model="info.content"
        editor-id="md-editor"
        :theme="(editorTheme as Themes)"
        :showCodeRowNumber="true"
        code-theme="atom"
        preview-theme="github"
        preview-only
      />
      <!-- 导航目录 -->
      <md-catalog
        class="custom-catalog lt-lg:hidden"
        editor-id="md-editor"
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
  const aP = document.querySelector(`a[href='#${t.text}']`).parentElement;
  const html = document.querySelector('html');
  html.scrollTo({
    top: aP.offsetTop + 198,
    behavior: 'smooth'
  });
  history.replaceState({}, '', `${location.pathname}#${t.text}`);
}
// 页面挂载前
// onBeforeMount(() => {
//   // 滚动元素设置
//   scrollElement.value = document.documentElement;
// });
</script>

<style lang="scss">
.post-info {
  .desc {
    padding: .75rem 1rem;
    background-color: rgba($color: #bbb, $alpha: 0.2);
  }
  .custom-catalog {
    position: fixed;
    top: 5.5rem;
    right: 2rem;
    padding-left: .5rem;
    border-left: 1px dashed rgba($color: #999, $alpha: 0.3);
    .md-catalog-link {
      padding-right: .5rem;
      padding-left: .5rem;
      span {
        font-size: 1rem;
        opacity: 0.8;
        &:hover {
          opacity: 1;
          color: unset;
        }
      }
    }
  }
}
</style>
