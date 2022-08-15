const { public: { baseURL } } = useRuntimeConfig();
import { Response, PageData, Post, PageBody } from "~~/types";

// 请求参数类型
interface PostPageBody extends PageBody {
  categorySlug?: string;
  tagSlugList?: string[];
}

// 请求方法
export default defineEventHandler(async (event) => {
  // 获取 body 参数
  const body: PostPageBody = await useBody(event);
  // 分页数据
  const result: Response<PageData<Post>> = await $fetch(`${baseURL}/page`, {
    method: 'post',
    body,
  });

  return result.data;
})