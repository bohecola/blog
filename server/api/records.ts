const { public: { baseURL } } = useRuntimeConfig();
import { Response, Records } from "~~/types";

// 请求方法
export default defineEventHandler(async (event) => {

  const result: Response<Records> = await $fetch(`${baseURL}/records`);

  return result.data;
})