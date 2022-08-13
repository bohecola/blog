const { public: { baseURL } } = useRuntimeConfig();
import { Response, Category } from "~~/types";

// 请求方法
export default defineEventHandler(async (event) => {

  const result: Response<Category[]> = await $fetch(`${baseURL}/categories`,{
    method: 'get'
  });

  return result.data;
})