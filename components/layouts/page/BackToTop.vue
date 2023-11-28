<script setup lang="ts">
const active = ref(false);

window.addEventListener("scroll", () => {
	active.value = window.scrollY > 100;
});
</script>

<template>
  <a
    href="#"
    :class="['back-to-top', { active }, 'flex items-center justify-center']"
  >
    <div class="i-material-symbols-arrow-upward-rounded  text-gray" />
  </a>
</template>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  width: 2em;
  height: 2em;
  right: 1.75rem;
  bottom: 0;
  opacity: 0;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-size: contain;
  transition: all 0.4s;
  pointer-events: none;
  cursor: pointer;
  &.active {
    bottom: 1.25em;
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
