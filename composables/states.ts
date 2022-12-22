export const useActiveStates = () => {
  return {
    activeTags: useState<string[]>(() => [])
  };
};
