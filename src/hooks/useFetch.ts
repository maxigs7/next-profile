import { useCallback } from 'react';

type UseFetchHookReturn = (url: string, init?: RequestInit) => Promise<any>;
type UseFetchHook = () => UseFetchHookReturn;

export const useFetch: UseFetchHook = () => {
  return useCallback(
    (path: string, init?: RequestInit) =>
      fetch(path, init).then((response) => {
        if (response.ok) return response.json();
        throw Error(response.statusText);
      }),
    [],
  );
};
