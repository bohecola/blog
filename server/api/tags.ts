const { public: { baseURL } } = useRuntimeConfig();
import { Response, Tag } from "~~/types";
import pinyin from "chinese-to-pinyin";
import slug from "slug";

// 请求方法
export default defineEventHandler(async (event) => {

  // 数据
  const result: Response<Tag[]> = await $fetch(`${baseURL}/tags`);
  
  // 添加 slug
  const data = result.data.map((item) => {
    item.slug = slug(pinyin(item.name, { removeTone: true }))
    return item;
  });

  return data;
})