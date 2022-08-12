// 帖子
export interface Post {
  id: number;
  title: string;
  desc: string | null;
  content?: string | null;
  slug?: string | null;
  status?: boolean;
  createdAt?: string;
  updatedAt?: string;
  category?: Category;
  tags?: Array<Tag>;
  categoryName?: string;
  tagNames?: string;
  day?: string;
}

// 目录
export interface Category {
  id: number;
  name: string;
  count?: number;
}

// 标签
export interface Tag {
  id: number;
  name: string;
  count?: number;
}

// 归档
export interface Records {
  [key: string]: Array<Post>
}

// 资料
export interface Profile {
  nikeName: string;
  avatar: string;
  desc: string | null;
  email: string | null;
}

// 响应
export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

// 分页请求
export interface PageBody {
  keyWord?: string;
  // 排序属性
  prop?: string;
  // 排序规则
  order?: string;
  page: number;
  size: number;
};

// 分页数据
export interface PageData<T> {
  list: Array<T>;
  pagination: {
    page: number;
    size: number;
    total: number;
  }
}
