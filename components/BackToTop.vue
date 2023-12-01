<script setup lang="ts">
const isActive = ref(false);

window.addEventListener("scroll", () => {
	isActive.value = window.scrollY > 100;
});

const backToTop = () => {
	window.scrollTo({
		top: 0
	});
};
</script>

<template>
  <button
    :class="`
      block fixed right-3 bottom-3
      w-10 h-10 text-center rounded-full
      opacity-30 hover:opacity-100
      transition-all duration-300
      z-20 hover:bg-[#88888833]
      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
    `"
    @click="backToTop"
  >
    <span class="i-material-symbols-arrow-upward-rounded " />
  </button>
</template>
