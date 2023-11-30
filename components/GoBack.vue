<script setup lang="ts">
// 路由
const route = useRoute();
// 路由器
const router = useRouter();
// 是否存在父级路径
const hasParentPath = computed(() => route.path.lastIndexOf("/") > 0);

// 返回上一级
function goBack() {
	// 父级路径
	const parentPath = useParentPath();

	// 路由跳转
	router.push(parentPath);
}
</script>

<template>
  <nuxt-link
    v-if="hasParentPath"
    class="font-mono cursor-pointer"
    @click="goBack"
  >
    > cd ..
  </nuxt-link>
</template>
