const { public: { baseURL } } = useRuntimeConfig();
import { Response, Category } from "~~/types";
import pinyin from "chinese-to-pinyin";
import slug from "slug";

// 请求方法
export default defineEventHandler(async (event) => {
  // 数据
  const result: Response<Category[]> = await $fetch(`${baseURL}/categories`);
  
  // 生成 slug
  const data = result.data.map((item) => {
    item.slug = slug(pinyin(item.name, { removeTone: true }))
    return item;
  });

  return data;
})