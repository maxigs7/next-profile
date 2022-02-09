import { parseISO, toDate } from 'date-fns';

const customToDate = (date: string): Date => toDate(parseISO(date));

export default customToDate;
