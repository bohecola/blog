<template>
  <div class="app">
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
