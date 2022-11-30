import { Response, Tag } from '~~/types'
const { public: { baseURL } } = useRuntimeConfig()

// 请求方法
export default defineEventHandler(async (event) => {
  // 标签数据
  const result: Response<Tag[]> = await $fetch(`${baseURL}/tags`)

  return result.data
})
