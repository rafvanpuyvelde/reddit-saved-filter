import React from 'react';
import styled from 'styled-components';

import { Saved } from '../../types/api/apiTypes';
import Heading from '../heading/Heading';
import Post from '../post/Post';

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

const Subreddit = styled(Heading)`
  margin-bottom: 23px;
`;

const SubredditWrapper = styled.li`
  min-width: 100%;
  margin-bottom: 37px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PostList = styled.ul`
  min-width: 100%;
`;

const PostWrapper = styled.li`
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export interface SavedPostListProps {
  posts?: [string, Saved[]][];
}

const SavedPostList: React.FC<SavedPostListProps> = ({ posts }) => {
  return (
    <>
      {posts && (
        <Wrapper>
          {posts?.map(([subreddit, posts]) => (
            <SubredditWrapper key={subreddit}>
              <Subreddit>{subreddit}</Subreddit>
              <PostList>
                {posts?.map((post) => (
                  <PostWrapper key={post.uuid}>
                    <Post
                      image={post.thumbnail?.src ?? ''}
                      text={post.title}
                      src={post.src}
                    />
                  </PostWrapper>
                ))}
              </PostList>
            </SubredditWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default SavedPostList;
