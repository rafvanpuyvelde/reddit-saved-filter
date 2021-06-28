import React from 'react';
import useGetRedditSaved from '../../hooks/api/saved';

const Search: React.FC = () => {
  const { loading, error, data } = useGetRedditSaved('SaltySpartan88');

  if (loading) return <p>loading</p>;
  if (error) return <p>{error as string}</p>;

  return (
    <ul>
      {data?.map((saved) => (
        <li key={saved.title}>
          <a href={saved.src}>{saved.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Search;
