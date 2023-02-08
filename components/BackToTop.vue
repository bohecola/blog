<script setup lang="ts">
import { throttle } from "lodash-es";

const visible = ref(false);
const clicked = ref(false);

const scrollHandler = throttle(function () {
  const h = document.documentElement.scrollTop || document.body.scrollTop;
  if (!clicked.value) {
    visible.value = h > 300;
  }
}, 200);

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  scrollHandler.cancel();
});

let timer: any = null;
function backToTop () {
  timer && clearTimeout(timer);
  clicked.value = true;
  scrollTo({ top: 0 });
  timer = setTimeout(() => {
    clicked.value = false;
    visible.value = false;
  }, 1900);
}
</script>

<template>
  <div :class="['back-to-top', { active: visible }, { forward: clicked }]" @click="backToTop" />
</template>

<style lang="scss" scoped>
.back-to-top {
  visibility: hidden;
  position: fixed;
  width: 3em;
  height: 3em;
  right: 1.75em;
  bottom: 1.25em;
  opacity: 0;
  z-index: 1;
  background: url('/assets/img/rocket.svg') no-repeat;
  background-size: contain;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &.active {
    visibility: visible;
    opacity: 1;
  }
  &.forward {
    animation: forward 2s;
  }
}

@keyframes forward {
  from {
    bottom: 1.25em;
    opacity: 1;
  }
  to {
    bottom: 16em;
    opacity: 0;
  }
}
</style>
