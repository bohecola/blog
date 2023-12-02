<template>
  <main class="px-7 py-10 overflow-x-hidden">
    <!-- 内容 -->
    <article class="mx-auto prose prose-img:rounded prose-img:border dark:prose-invert">
      <slot />
    </article>
    <!-- 回到顶部 -->
    <div class="prose dark:prose-invert m-auto">
      <GoBack />
    </div>
  </main>
</template>
