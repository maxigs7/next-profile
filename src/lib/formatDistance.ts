import { formatDuration, intervalToDuration } from 'date-fns';
import enUs from 'date-fns/locale/en-US';
import toDate from './toDate';

const formatDistanceLocale: Record<any, any> = {
  xMonths: {
    one: '1 mo',
    other: '{{count}} mos',
  },
  xYears: {
    one: '1 yr',
    other: '{{count}} yrs',
  },
};

const formatDistanceTokenReplacement = (token: any, count: any, options: any): any => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

const customFormatDistance = (startDate: string, endDate: string | Date = new Date()) => {
  const start = toDate(startDate);
  const end = typeof endDate === 'string' ? toDate(endDate) : endDate;

  const duration = intervalToDuration({
    start,
    end,
  });

  return formatDuration(duration, {
    format: ['years', 'months'],
    // TODO: Add localization
    locale: {
      ...enUs,
      formatDistance: formatDistanceTokenReplacement,
    },
  });
};

export default customFormatDistance;
