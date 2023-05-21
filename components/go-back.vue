<script setup lang="ts">
// 路由
const route = useRoute();
// 路由器
const router = useRouter();
// 是否存在父级路径
const hasParentPath = computed(() => route.path.lastIndexOf("/") > 0);

// 无效路径
const invalidPath = ["/blog"];

// 返回上一级
function goBack () {
  // 当前路径
  const currentPath = route.path;
  // 尾路径分隔符索引
  const endIndex = currentPath.lastIndexOf("/");
  // 父级路径
  const parentPath = currentPath.substring(0, endIndex);
  // 路径
  const path = invalidPath.includes(parentPath) ? "/" : parentPath;

  // 路由跳转
  router.push(path);
}
</script>

<template>
  <nuxt-link
    v-if="hasParentPath"
    class="font-mono opacity-50 hover:opacity-75 cursor-pointer"
    @click="goBack"
  >
    cd ..
  </nuxt-link>
</template>
