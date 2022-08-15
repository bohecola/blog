export const usePagination = () => {
  const page = useState('page', () => 1);
  const size = useState('size', () => 10);

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