<template>
  <div class="doc-wrap">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <div class="flex items-center">
          <span class="opacity-50 mr-4">
            {{ dateFormat(doc.date) }}
          </span>
          <TagList :data="doc.tags" />
        </div>
        <p class="opacity-50">
          {{ doc.description }}
        </p>

        <ContentRenderer class="content-renderer" :value="doc" />
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
import mediumZoom from "medium-zoom";
import { dateFormat } from "@/utils";

const color = useColorMode();

onMounted(() => {
  const zoom = mediumZoom("[data-zoomable]");

  watch(color, (newColor) => {
    zoom.update({ background: newColor.value === "dark" ? "#091a28" : "#fff" });
  });
});
</script>
