export function useCopy () {
  const copied = ref(false);

  function copyHandler (code: string) {
    navigator.clipboard.writeText(code)
      .then(() => {
        copied.value = true;
        reset();
      });
  }

  function reset () {
    const timer = setTimeout(() => {
      copied.value = false;
      clearTimeout(timer);
    }, 800);
  }

  return {
    copied,
    copyHandler
  };
}
