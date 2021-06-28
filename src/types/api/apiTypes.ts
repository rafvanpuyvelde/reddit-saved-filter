export interface ApiResult<T> {
  isLoading: boolean;
  error: string;
  data: T;
}

export interface User {
  username: string;
}

export interface Saved {
  title: string;
}
