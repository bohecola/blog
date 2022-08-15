const { public: { baseURL } } = useRuntimeConfig();
import { Response, Category } from "~~/types";

// 请求方法
export default defineEventHandler(async (event) => {
  // 目录数据
  const result: Response<Category[]> = await $fetch(`${baseURL}/categories`);

  return result.data;
})