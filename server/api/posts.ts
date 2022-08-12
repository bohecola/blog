const { public: { baseURL } } = useRuntimeConfig();
import { Response, PageData, Post, PageBody } from "~~/types";

// 请求参数类型
interface PostPageBody extends PageBody {
  categoryId?: number;
  tagIdList?: Array<number>;
}

// 请求方法
export default defineEventHandler(async (event) => {
  const body: PostPageBody = await useBody(event);

  const result: Response<PageData<Post>> = await $fetch(`${baseURL}/page`, {
    method: 'post',
    body,
  });

  return result.data;
})