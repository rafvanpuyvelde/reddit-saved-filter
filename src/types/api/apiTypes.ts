export interface ApiResult<T> {
  loading: boolean;
  error: unknown;
  data: T;
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

// title: data.children.data.title

export interface Saved {
  title: string;
  subreddit?: string; // subreddit_name_prefixed
  thumbnail?: Thumbnail;
  src: string; // permalink
}

export interface Thumbnail {
  height: number; // thumbnail_height
  width: number;
  src: string; // thumbnail
}
