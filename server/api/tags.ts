const { public: { baseURL } } = useRuntimeConfig();
import { Response, Tag } from "~~/types";
import pinyin from "chinese-to-pinyin";
import slug from "slug";

// 请求方法
export default defineEventHandler(async (event) => {
  // 标签数据
  const result: Response<Tag[]> = await $fetch(`${baseURL}/tags`);

  return result.data;
})