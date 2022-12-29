<template>
  <div class="doc-wrap">
    <ContentDoc class="content-doc">
      <template #default="{ doc }">
        <ContentRenderer :value="doc" />
        <Toc class="lt-md:hidden" :toc="doc.body.toc" />
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
// const route = useRoute();
// const { data } = await useAsyncData(`${route.path}`, () => queryContent(`${route.path}`).findOne());
</script>
