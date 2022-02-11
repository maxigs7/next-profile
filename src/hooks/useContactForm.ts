import { IContact } from '@/model';
import { useCallback } from 'react';
import { useFetch } from './useFetch';

type UseContactFormHookReturn = (contact: IContact) => Promise<any>;
type UseContactFormHook = () => UseContactFormHookReturn;
const FORMSPARK_ACTION_URL = 'https://submit-form.com/wZzHeoZl';

export const useContactForm: UseContactFormHook = () => {
  const fetch = useFetch();

  return useCallback(
    (contact: IContact) =>
      fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          contact,
        }),
      }),
    [fetch],
  );
};
