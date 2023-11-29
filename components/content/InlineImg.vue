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
    class="not-prose inline-block align-text-bottom mx-1"
    :src="src"
    :alt="alt"
    :height="height"
    :width="width"
  >
</template>
