<script setup lang="ts">
import { throttle } from "lodash-es";

const postExist = usePostExist();
const isTocBtnActive = useTocBtnActive();

const innerWidth = ref(window.innerWidth);
const handleResize = throttle(() => {
	innerWidth.value = window.innerWidth;
}, 100);
window.addEventListener("resize", handleResize);

const xl = 1280;

watch(innerWidth, (val) => {
	if (val > xl) {
		isTocBtnActive.value = false;
	}
});

onUnmounted(() => {
	handleResize.cancel();
});
</script>

<template>
  <nuxt-link
    v-if="postExist"
    :class="`cursor-pointer xl:hidden ${isTocBtnActive ? '!opacity-100' : 'opacity-70'}`"
    @click="isTocBtnActive = !isTocBtnActive"
  >
    <span class="i-material-symbols-menu-rounded" />
  </nuxt-link>
</template>
