import { format } from 'date-fns';
import toDate from './toDate';

const formatMonthYear = (date: string) => {
  const parsedDate = toDate(date);
  return format(parsedDate, 'MMM yyyy');
};

export default formatMonthYear;
