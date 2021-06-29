import useSWR from 'swr';
import { v4 as uuid } from 'uuid';
import { fetcher } from '../../util/api/apiUtil';

import type {
  ApiRequestOptions,
  ApiResult,
  Saved,
  SavedApiResult,
  User,
} from '../../types/api/apiTypes';

const mapSaved = (result?: SavedApiResult): Saved[] | undefined => {
  return result?.data?.children?.map(
    (child) =>
      ({
        uuid: uuid(),
        title: child?.data?.title ?? 'Title not found ...',
        src: `https://www.reddit.com${child?.data?.permalink}`,
        subreddit: child?.data?.subreddit_name_prefixed,
        thumbnail: {
          height: parseInt(
            child?.data?.thumbnail_height?.toString() ?? '0',
            10,
          ),
          width: parseInt(child?.data?.thumbnail_width?.toString() ?? '0', 10),
          src:
            child?.data?.thumbnail === 'default' ||
            child?.data?.thumbnail === 'self'
              ? 'https://picsum.photos/50'
              : child?.data?.thumbnail ?? 'https://picsum.photos/50',
        },
      } as Saved),
  );
};

/**
 * Gets the saved Reddit posts for a given user
 * @param user The username
 * @returns The saved posts
 */
const useGetRedditSaved = (
  user?: User['username'],
  options?: ApiRequestOptions,
): ApiResult<Saved[]> => {
  const { data, error } = useSWR<SavedApiResult, unknown>(
    // @ts-ignore
    !options?.skip
      ? `https://oauth.reddit.com/user/${user}/saved?limit=1200`
      : null,
    fetcher,
    { revalidateOnFocus: false },
  );

  return {
    loading: !error && !data,
    error,
    data: mapSaved(data) ?? [],
  };
};

export default useGetRedditSaved;
