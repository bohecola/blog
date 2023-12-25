<template>
  <div class="min-h-screen dark:bg-grid-texture bg-[center_top_59px]">
    <!-- 头部 -->
    <ClientOnly>
      <LayoutHeader />
    </ClientOnly>
    <!-- 内容 -->
    <LayoutContent>
      <slot />
    </LayoutContent>

    <!-- 回到顶部 -->
    <ClientOnly>
      <!-- 底部 -->
      <LayoutFooter />
      <BackToTop />
    </ClientOnly>
  </div>
</template>
