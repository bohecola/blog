<script setup lang="ts">
defineProps({
	code: {
		type: String,
		default: ""
	},
	language: {
		type: String,
		default: null
	},
	filename: {
		type: String,
		default: null
	},
	highlights: {
		type: Array as () => number[],
		default: () => []
	}
});

// 拷贝状态和拷贝函数，拷贝状态在拷贝完成后 900ms 更新为 false（实现拷贝成功状态停留显示）
const { copied, copy } = useCopy();
</script>

<template>
  <div class="group relative rounded">
    <div class="absolute top-3 right-3 opacity-70 text-sm text-gray-200">
      <!-- 语言提示 -->
      <div
        :class="`group-hover:hidden font-mono text-xs ${copied ? '!hidden' : ''}`"
      >
        {{ language }}
      </div>

      <!-- 拷贝按钮 -->
      <button
        :class="`hidden group-hover:block cursor-pointer ${copied ? '!block' : ''}`"
        :disabled="copied"
        @click="copy(code)"
      >
        <i :class="`inline-block ${copied ? 'i-carbon-checkmark text-teal-600 dark:color-teal' : 'i-carbon-copy'}`" />
      </button>
    </div>

    <!-- 代码块 -->
    <slot />
  </div>
</template>

<style scoped>
.show {
  display: block;
}
.unshow {
  display: none;
}
</style>
