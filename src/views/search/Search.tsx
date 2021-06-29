import React, { useMemo } from 'react';
import styled from 'styled-components';

import useGetRedditSaved from '../../hooks/api/saved';
import { getUserName } from '../../util/api/apiUtil';
import groupBy from '../../util/helpers';

const Img = styled.img`
  border: red;
`;

const Search: React.FC = () => {
  const username = getUserName();

  const { loading, error, data: saved } = useGetRedditSaved(username);

  const filteredItems = useMemo(
    () => Array.from(groupBy(saved, (saved) => saved.subreddit)),
    [saved],
  );

  if (loading) return <p>loading</p>;
  if (error) return <p>{error as string}</p>;

  return (
    <ul>
      {filteredItems?.map(([subreddit, items]) => (
        <li key={subreddit}>
          <p>{subreddit}</p>
          <ul>
            {items?.map((item) => (
              <li key={item.title}>
                <a href={item.src} target="_blank" rel="noreferrer">
                  {item.title}
                  <div>
                    <Img
                      src={item?.thumbnail?.src}
                      alt="post thumbnail"
                      height={50}
                      width={50}
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Search;
