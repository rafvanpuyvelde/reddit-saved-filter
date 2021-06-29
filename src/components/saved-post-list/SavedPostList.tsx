import React from 'react';
import styled from 'styled-components';

import { Saved } from '../../types/api/apiTypes';
import Heading from '../heading/Heading';
import Post from '../post/Post';

const Wrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

const Subreddit = styled(Heading)`
  margin-bottom: 23px;
`;

const SubredditWrapper = styled.li`
  margin-bottom: 37px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PostWrapper = styled.li`
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export interface SavedPostListProps {
  posts?: { [subreddit: string]: Saved[] };
}

const SavedPostList: React.FC<SavedPostListProps> = ({ posts }) => {
  return (
    <>
      {posts && (
        <Wrapper>
          {Object.entries(posts)?.map(([subreddit, posts]) => (
            <SubredditWrapper key={subreddit}>
              <Subreddit>{subreddit}</Subreddit>
              <ul>
                {posts?.map((post) => (
                  <PostWrapper key={post.uuid}>
                    <Post
                      image={post.thumbnail?.src ?? ''}
                      text={post.title}
                      src={post.src}
                    />
                  </PostWrapper>
                ))}
              </ul>
            </SubredditWrapper>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default SavedPostList;
