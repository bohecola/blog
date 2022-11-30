import { Response, PageData, Post, PageBody } from '~~/types'
const { public: { baseURL } } = useRuntimeConfig()

// 请求参数类型
interface PostPageBody extends PageBody {
  categorySlug?: string;
  tagSlugList?: string[];
}

// 请求方法
export default defineEventHandler(async (event) => {
  // 获取 body 参数
  const body: PostPageBody = await readBody(event)
  // 分页数据
  const result: Response<PageData<Post>> = await $fetch(`${baseURL}/page`, {
    method: 'post',
    body
  })

  result.data.list = result.data.list.map((post) => {
    post.createdAt = new Date(post.createdAt)
      .toDateString()
      .substring(4)
      .replace(/(?<=\d)\u0020(?=\d)/g, ', ')
    return post
  })

  return result.data
})
