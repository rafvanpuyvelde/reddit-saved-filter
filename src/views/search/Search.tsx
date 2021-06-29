import React, { useMemo } from 'react';
import styled from 'styled-components';

import SavedPostList from '../../components/saved-post-list/SavedPostList';
import useGetRedditSaved from '../../hooks/api/saved';
import { Saved } from '../../types/api/apiTypes';
import { getUserName } from '../../util/api/apiUtil';
import groupBy from '../../util/helpers';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 285px;
`;

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
    <Wrapper>
      <Container>
        <SavedPostList posts={filteredItems} />
      </Container>
    </Wrapper>
  );
};

export default Search;
