<script setup lang="ts">
defineProps({
	src: {
		type: String,
		default: ""
	},
	alt: {
		type: String,
		default: ""
	},
	width: {
		type: [String, Number],
		default: "20"
	},
	height: {
		type: [String, Number],
		default: "20"
	}
});
</script>

<template>
  <img
    class="inline-img"
    :src="src"
    :alt="alt"
    :height="height"
    :width="width"
  >
</template>

<style lang="scss" scoped>
  .inline-img {
    margin-bottom: -2px;
  }
</style>
