const { public: { baseURL } } = useRuntimeConfig();
import { Response, Post } from "~~/types";

// 请求方法
export default defineEventHandler(async (event) => {
  // 获取 query 参数
  const query = useQuery(event);
  // 详情数据
  const result: Response<Post> = await $fetch(`${baseURL}/info?slug=${query.slug}`);

  return result.data;
})