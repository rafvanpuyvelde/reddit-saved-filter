export const fetcher = async (...args: unknown[]): Promise<unknown> => {
  // @ts-ignore
  const res = await fetch(...args, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'User-Agent': 'SavedFilter/0.1 by u/SaltySpartan88',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // if (res.status === 401) localStorage.removeItem('token');

  return res.json();
};

export const getUserName = (): string | undefined => {
  return localStorage.getItem('username')?.split('/').reverse()[0];
};

export default fetcher;
