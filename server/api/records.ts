import { Response, Records } from '~~/types'
const { public: { baseURL } } = useRuntimeConfig()

// 请求方法
export default defineEventHandler(async (event) => {
  // 归档数据
  const result: Response<Records> = await $fetch(`${baseURL}/records`)

  return result.data
})
