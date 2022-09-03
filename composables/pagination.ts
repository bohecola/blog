export const usePagination = (key?: string) => {
  const page = useState(`${key}-page`, () => 1);
  const size = useState(`${key}-size`, () => 5);

  function setPage(val: number) {
    page.value = val;
  }
  function setSize(val: number) {
    size.value = val;
  }
  
  return {
    page,
    size,
    setPage,
    setSize
  };
}