<template>
  <figure>
    <img
      data-zoomable
      class="block my-3 mx-auto"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    >
    <figcaption
      v-if="alt"
      class="text-center font-light"
    >
      {{ alt }}
    </figcaption>
  </figure>
</template>

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
		default: undefined
	},
	height: {
		type: [String, Number],
		default: undefined
	}
});
</script>
