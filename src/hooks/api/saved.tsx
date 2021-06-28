import useSWR from 'swr';
import fetcher from '../../util/api/apiUtil';

import type {
  ApiResult,
  Saved,
  SavedApiResult,
  User,
} from '../../types/api/apiTypes';

const mapSaved = (result?: SavedApiResult): Saved[] | undefined => {
  return result?.data?.children?.map(
    (child) =>
      ({
        title: child?.data?.title,
        src: `https://www.reddit.com${child?.data?.permalink}`,
        subreddit: child?.data?.subreddit_name_prefixed,
        thumbnail: {
          height: parseInt(
            child?.data?.thumbnail_height?.toString() ?? '0',
            10,
          ),
          width: parseInt(child?.data?.thumbnail_width?.toString() ?? '0', 10),
          src: child?.data?.thumbnail,
        },
      } as Saved),
  );
};

/**
 * Gets the saved Reddit posts for a given user
 * @param user The username
 * @returns The saved posts
 */
const useGetRedditSaved = (user: User['username']): ApiResult<Saved[]> => {
  const { data, error } = useSWR<SavedApiResult, unknown>(
    // @ts-ignore
    `https://oauth.reddit.com/user/${user}/saved?limit=1200`,
    fetcher,
  );

  return {
    loading: !error && !data,
    error,
    data: mapSaved(data) ?? [],
  };
};

export default useGetRedditSaved;
