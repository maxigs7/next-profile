import { useLocale } from '@/hooks';
import { formatDuration, intervalToDuration } from 'date-fns';
import toDate from './toDate';

const formatDistanceEn: Record<any, any> = {
  xMonths: {
    one: '1 mo',
    other: '{{count}} mos',
  },
  xYears: {
    one: '1 yr',
    other: '{{count}} yrs',
  },
};

const formatDistanceEs: Record<any, any> = {
  xMonths: {
    one: '1 m',
    other: '{{count}} ms',
  },
  xYears: {
    one: '1 a',
    other: '{{count}} as',
  },
};

const formatDistanceTokenReplacement =
  (tokens: Record<any, any>) =>
  (token: any, count: any, options: any): any => {
    let result;

    const tokenValue = tokens[token];
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

const useFormatDistance = (startDate: string, endDate: string | Date = new Date()) => {
  const { dateLocale, locale } = useLocale();
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
      ...dateLocale,
      formatDistance: formatDistanceTokenReplacement(
        locale === 'es' ? formatDistanceEs : formatDistanceEn,
      ),
    },
  });
};

export default useFormatDistance;
