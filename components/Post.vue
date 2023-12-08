<template>
  <ContentDoc>
    <template #default="{ doc }">
      <!-- front-matter 中定义的 title 标题 -->
      <h1>{{ doc.title }}</h1>

      <!-- 写作时间 文章标签 -->
      <div class="flex items-center">
        <span class="opacity-70 mr-4">
          {{ dateFormat(doc.date) }}
        </span>
        <TagList :tags="doc.tags" />
      </div>

      <!-- 文章描述 -->
      <p class="opacity-70">
        {{ doc.description }}
      </p>

      <!-- 文章内容 -->
      <ContentRenderer :value="doc" />

      <!-- 文章目录 -->
      <Toc
        class="max-md:hidden"
        :toc="doc.body!.toc!"
      />
    </template>
    <template #not-found>
      <h1>Document not found</h1>
    </template>
  </ContentDoc>
</template>

<script setup lang="ts">
import mediumZoom from "medium-zoom";
import { dateFormat } from "@/utils";

const color = useColorMode();

onMounted(() => {
	const zoom = mediumZoom("[data-zoomable]");

	watch(color, (newColor) => {
		zoom.update({ background: newColor.value === "dark" ? "#111" : "#fff" });
	}, { immediate: true });
});
</script>
