const { public: { baseURL } } = useRuntimeConfig();
import { Response, Post } from "~~/types";

// 详情查询
export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  const result: Response<Post> = await $fetch(`${baseURL}/info?slug=${query.slug}`);

  return result.data;
})