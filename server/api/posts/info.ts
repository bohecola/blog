import { Response, Post } from '~~/types'
const { public: { baseURL } } = useRuntimeConfig()

// 请求方法
export default defineEventHandler(async (event) => {
  // 获取 query 参数
  const query = getQuery(event)
  // 详情数据
  const result: Response<Post> = await $fetch(`${baseURL}/info?slug=${query.slug}`)

  result.data.createdAt = new Date(result.data.createdAt as string)
    .toDateString()
    .substring(4)
    .replace(/(?<=\d)\u0020(?=\d)/g, ', ')

  return result.data
})
