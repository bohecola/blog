<script setup lang="ts">
const isActive = ref(false);

window.addEventListener("scroll", () => {
	isActive.value = window.scrollY > 100;
});
</script>

<template>
  <a
    href="#"
    :class="`
      block fixed right-7 bottom-4 w-7 h-7 leading-7 text-center text-lg
      opacity-70 hover:opacity-100 z-20 transition-all duration-300
      ${isActive ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-10'}
    `"
  >
    <span class="i-material-symbols-arrow-upward-rounded" />
  </a>
</template>
