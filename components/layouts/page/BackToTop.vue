<script setup lang="ts">
const active = ref(false);

window.addEventListener("scroll", () => {
	active.value = window.scrollY > 100;
});
</script>

<template>
  <a
    href="#"
    :class="['back-to-top', { active }]"
  />
</template>

<style lang="scss" scoped>
.back-to-top {
  position: fixed;
  width: 3em;
  height: 3em;
  right: 1.75em;
  bottom: 0;
  opacity: 0;
  background: url('/assets/img/rocket.svg') no-repeat;
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
