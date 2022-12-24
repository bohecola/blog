<template>
  <div class="doc-wrap">
    <ContentDoc class="content-doc">
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        Document is empty
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const { toc } = useContent();
</script>

<style lang="scss">
.content-doc {
  ul ul { list-style: circle; }
  ul ul ul { list-style: square; }
}
</style>
