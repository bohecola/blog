<template>
  <div class="app">
    <LayoutsPageHeader />
    <LayoutsPageContent>
      <slot />
    </LayoutsPageContent>
    <LayoutsPageFooter />
    <ClientOnly>
      <LayoutsPageBackToTop />
    </ClientOnly>
  </div>
</template>
