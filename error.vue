<script setup lang="ts">
defineProps({
	error: Object
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <!-- 错误信息 -->
    <div>
      <p class="mt-30">
        Ooops.
      </p>
      <p>statusCode: {{ error!.statusCode }}</p>
      <p>{{ error!.message }}</p>
    </div>
    <!-- 返回主页 -->
    <button
      class="border-b border-gray-300 hover:border-gray-400"
      @click="handleError"
    >
      Clear errors
    </button>
  </NuxtLayout>
</template>
