import { Response, Profile } from '~~/types'
const { public: { baseURL } } = useRuntimeConfig()

// 请求方法
export default defineEventHandler(async (event) => {
  // 简介数据
  const result: Response<Profile> = await $fetch(`${baseURL}/profile`)

  return result.data
})
