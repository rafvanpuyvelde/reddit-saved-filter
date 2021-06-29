export interface ApiResult<T> {
  loading: boolean;
  error: unknown;
  data: T;
}

export interface ApiRequestOptions {
  skip?: boolean;
}

export interface User {
  username: string;
}

export interface SavedApiResult {
  data: {
    children: {
      data: {
        title?: string;
        subreddit_name_prefixed?: string;
        permalink?: string;
        thumbnail?: string;
        thumbnail_height?: string;
        thumbnail_width?: string;
      };
    }[];
  };
}

export interface Saved {
  uuid: string;
  title: string;
  subreddit?: string;
  thumbnail?: Thumbnail;
  src: string;
}

export interface Thumbnail {
  height: number;
  width: number;
  src: string;
}
