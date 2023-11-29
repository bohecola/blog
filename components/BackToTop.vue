<script setup lang="ts">
const isActive = ref(false);

window.addEventListener("scroll", () => {
	isActive.value = window.scrollY > 100;
});
</script>

<template>
  <a
    href="#"
    :class="`back-to-top text-lg ${isActive ? 'active' : ''}`"
  >
    <div class="i-material-symbols-arrow-upward-rounded" />
  </a>
</template>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  right: 1.75rem;
  bottom: 0;
  opacity: 0;
  transition: all 0.4s;
  cursor: pointer;
  &.active {
    bottom: 1.25em;
    opacity: 1;
  }
}
</style>
