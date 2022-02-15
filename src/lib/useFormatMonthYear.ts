import { useLocale } from '@/hooks';
import { format } from 'date-fns';
import toDate from './toDate';

const useFormatMonthYear = (date?: string | null) => {
  const { dateLocale } = useLocale();
  if (!date) return null;
  const parsedDate = toDate(date);
  return format(parsedDate, 'MMM yyyy', { locale: dateLocale });
};

export default useFormatMonthYear;
