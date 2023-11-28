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
