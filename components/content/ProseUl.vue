<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
ul{
  list-style-type: var(--prose-ul-list-style-type);
  margin: var(--prose-ul-margin);
  padding: var(--prose-ul-padding);
  & > :deep(li::marker) {
    color: var(--prose-ul-li-marker-color-light);
  }
  & > :deep(li ol), & > :deep(li ul) {
    margin: 0;
  }
}

:root.dark ul {
  & > :deep(li::marker) {
    color: var(--prose-ul-li-marker-color-dark)
  }
}
</style>
