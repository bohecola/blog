export function useParentPath () {
  // 路由
  const route = useRoute();
  // 当前路径
  const currentPath = route.path;
  // 无效路径（虚路径）
  const invalidPaths = ["/blog"];
  // 尾路径分隔符索引
  const endIndex = currentPath.lastIndexOf("/");

  // 多级路由
  const isMulti = endIndex > 0;

  if (isMulti) {
    // 计算的父级路径
    const computedParentPath = currentPath.slice(0, endIndex);
    // 实际父级路径
    const parentPath = invalidPaths.includes(computedParentPath) ? "/" : computedParentPath;
    // 返回父级路径
    return parentPath;
  } else {
    // 不存在多级路径，返回当前路径
    return currentPath;
  }
}
