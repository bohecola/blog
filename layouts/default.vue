<template>
  <div class="app min-h-screen dark:bg-grid-texture bg-[center_top_59px]">
    <!-- 头部 -->
    <LayoutHeader />
    <!-- 内容 -->
    <LayoutContent>
      <slot />
    </LayoutContent>
    <!-- 底部 -->
    <LayoutFooter />
    <!-- 回到顶部 -->
    <ClientOnly>
      <BackToTop />
    </ClientOnly>
  </div>
</template>
