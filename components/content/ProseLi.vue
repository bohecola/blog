<template>
  <li>
    <slot />
  </li>
</template>

<style lang="scss" scoped>
li {
  list-style-position: var(--prose-li-list-style-position);
  margin: var(--prose-li-margin)
}
</style>
