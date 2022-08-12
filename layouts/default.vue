<template>
  <div class="page-layout">
    <div class="page-layout__header">
      <logo />
      <layout-topbar />
    </div>

    <div class="page-layout__container">
      <slot></slot>
    </div>

    <div class="page-layout__footer">
      Bottom
    </div>
  </div>
</template>

<style lang="scss">
.page-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &__container {
    flex: 1;
    padding: 2.5rem 1.75rem;
  }

  &__footer {
    margin: 20px auto 10px;
  }
}
</style>