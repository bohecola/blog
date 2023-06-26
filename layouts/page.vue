<template>
  <div class="app">
    <LayoutsPageNavbar />
    <LayoutsPageContent>
      <slot />
    </LayoutsPageContent>
    <LayoutsPageFooter />
    <ClientOnly>
      <LayoutsPageBackToTop />
    </ClientOnly>
  </div>
</template>
