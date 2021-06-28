export const fetcher = (...args: unknown[]): Promise<unknown> =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());
