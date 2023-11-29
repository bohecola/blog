export function useParentPath() {
	// 虚路径
	const virtualPath = ["/blog"];
	// 当前路径
	const { path } = useRoute();
	// 倒序查找斜杠索引
	const lastSlashIndex = path.lastIndexOf("/");

	// 是否是多级路由
	const isMulti = lastSlashIndex > 0;

	// 多级路由
	if (isMulti) {
		// 截取父级路径
		const parentPath = path.slice(0, lastSlashIndex);
		// 返回父级路由
		return virtualPath.includes(parentPath) ? "/" : parentPath;
	}

	return path;
}
