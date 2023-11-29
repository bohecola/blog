<template>
  <main class="p-6 overflow-x-hidden">
    <!-- 内容 -->
    <article class="prose prose-slate prose-img:rounded prose-img:border dark:prose-invert mx-auto">
      <slot />
    </article>
    <!-- 回到顶部 -->
    <div class="prose dark:prose-invert m-auto">
      <GoBack />
    </div>
  </main>
</template>
