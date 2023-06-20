export function useCopy() {
	const copied = ref(false);

	function copyHandler(code: string) {
		navigator.clipboard.writeText(code)
			.then(() => {
				copied.value = true;
				reset();
			});
	}

	function reset(delay = 0.9) {
		const second = 1000;
		const timer = setTimeout(() => {
			copied.value = false;
			clearTimeout(timer);
		}, delay * second);
	}

	return {
		copied,
		copyHandler
	};
}
