export function useCopy() {
	// 拷贝状态
	const copied = ref(false);

	// 拷贝
	function copy(code: string, cb?: () => void) {
		// 开始拷贝
		copied.value = true;
		navigator.clipboard.writeText(code)
			.then(() => {
				// 拷贝很快，延迟一下再重置拷贝状态
				setTimeout(() => {
					cb && cb();
					copied.value = false;
				}, 900);
			});
	}

	return {
		copied,
		copy
	};
}

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
