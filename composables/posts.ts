import { Post } from '~~/types'

export const usePosts = (key?: string) => {
  const posts = useState(`${key}-posts`, () => [])

  function setPosts (val: Post[]) {
    posts.value = val
  }

  function loadMore (val: Post[]) {
    posts.value = posts.value.concat(val)
  }

  return {
    posts,
    setPosts,
    loadMore
  }
}
