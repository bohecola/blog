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
  <div class="group relative bg-gray-1 dark:bg-gray-8 rounded">
    <div class="absolute top-3 right-3 opacity-70">
      <!-- 语言提示 -->
      <div
        ref="langRef"
        class="block group-hover:hidden text-xs "
      >
        {{ props.language }}
      </div>

      <!-- 拷贝按钮 -->
      <button
        ref="copyBtnRef"
        class="hidden group-hover:block p-0 cursor-pointer border-none bg-inherit color-inherit"
        :disabled="copied"
        @click="handleClick"
      >
        <i :class="`inline-block ${copied ? 'i-carbon-checkmark color-teal-6 dark:color-teal' : 'i-carbon-copy'}`" />
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
