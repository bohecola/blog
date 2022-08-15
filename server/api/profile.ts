const { public: { baseURL } } = useRuntimeConfig();
import { Response, Profile } from "~~/types";

// 请求方法
export default defineEventHandler(async (event) => {
  // 简介数据
  const result: Response<Profile> = await $fetch(`${baseURL}/profile`);

  return result.data;
})