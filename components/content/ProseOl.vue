<template>
  <ol>
    <slot />
  </ol>
</template>

<style lang="scss" scoped>
ol {
  list-style-type: var(--prose-ol-list-style-type);
  margin: var(--prose-ol-margin);
  padding: var(--prose-ol-padding);

  & > :deep(li::marker) {
    color: var(--prose-ol-li-marker-color-light)
  }
  & > :deep(li ol), & > :deep(li ul) {
    margin: 0;
  }
}

:root.dark ol {
  & > :deep(li::marker) {
    color: var(--prose-ol-li-marker-color-dark)
  }
}
</style>
