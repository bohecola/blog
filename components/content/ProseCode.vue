<script setup lang="ts">
const props = defineProps({
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

// 临时处理
const copyBtnRef = ref<HTMLElement | null>(null);
const langRef = ref<HTMLElement | null>(null);

const { copied, copy } = useCopy();

// 拷贝按钮点击
function handleClick() {
	copyBtnRef.value!.classList.add("show");
  langRef.value!.classList.add("unshow");

  copy(props.code, () => {
    copyBtnRef.value!.classList.remove("show");
    langRef.value!.classList.remove("unshow");
  });
}
</script>

<template>
  <div class="group relative rounded">
    <div class="absolute top-3 right-3 opacity-70 text-sm text-gray-200">
      <!-- 语言提示 -->
      <div
        ref="langRef"
        class="block group-hover:hidden font-mono text-xs"
      >
        {{ props.language }}
      </div>

      <!-- 拷贝按钮 -->
      <button
        ref="copyBtnRef"
        class="hidden group-hover:block cursor-pointer"
        :disabled="copied"
        @click="handleClick"
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
