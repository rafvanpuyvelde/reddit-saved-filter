import useSWR from 'swr';
import { fetcher } from '../../util/api/apiUtil';

import type { ApiResult, Saved } from '../../types/api/apiTypes';

const useSaved = (): ApiResult<Saved[]> => {
  const { data, error } = useSWR(`/api`, fetcher);

  return {
    isLoading: !error && !data,
    error,
    data: [
      {
        title: 'test',
      },
    ],
  };
};

export default useSaved;
