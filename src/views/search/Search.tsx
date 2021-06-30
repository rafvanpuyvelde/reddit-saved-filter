import React, { useMemo } from 'react';

import AppLayout from '../../components/app-layout/AppLayout';
import SavedPostList from '../../components/saved-post-list/SavedPostList';
import useGetRedditSaved from '../../hooks/api/saved';
import { Saved } from '../../types/api/apiTypes';
import { getUserName } from '../../util/api/apiUtil';
import groupBy from '../../util/helpers';

const Search: React.FC = () => {
  const username = getUserName();

  const { loading, error, data: saved } = useGetRedditSaved(username);

  const filteredItems = useMemo(
    () =>
      Array.from(groupBy(saved, (saved) => saved.subreddit)).filter(
        ([subreddit]) => subreddit !== undefined,
      ) as [string, Saved[]][],
    [saved],
  );

  if (loading) return <p>loading</p>;
  if (error) return <p>{error as string}</p>;

  return (
    <AppLayout>
      <SavedPostList posts={filteredItems} />
    </AppLayout>
  );
};

export default Search;
