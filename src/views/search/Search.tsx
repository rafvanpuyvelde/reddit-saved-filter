import React, { useMemo } from 'react';

import useGetRedditSaved from '../../hooks/api/saved';
import groupBy from '../../util/helpers';

const Search: React.FC = () => {
  const { loading, error, data: saved } = useGetRedditSaved('SaltySpartan88');

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
