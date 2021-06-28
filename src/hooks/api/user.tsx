import useSWR from 'swr';
import { fetcher } from '../../util/api/apiUtil';

import type { ApiResult, User } from '../../types/api/apiTypes';

const useUser = (): ApiResult<User> => {
  const { data, error } = useSWR(`/api/v1/me`, fetcher);

  return {
    isLoading: !error && !data,
    error,
    data: {
      // @ts-ignore
      username: data?.username,
    },
  };
};

export default useUser;
