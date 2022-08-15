const { public: { baseURL } } = useRuntimeConfig();
import { Response, Category } from "~~/types";
import pinyin from "chinese-to-pinyin";
import slug from "slug";

// 请求方法
export default defineEventHandler(async (event) => {
  // 目录数据
  const result: Response<Category[]> = await $fetch(`${baseURL}/categories`);

  return result.data;
})