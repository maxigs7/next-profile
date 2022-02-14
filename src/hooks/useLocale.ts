import translate, { TranslationKey } from '@/i18n';
import en from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import { useRouter } from 'next/router';

export const useLocale = () => {
  const { locale, defaultLocale } = useRouter();
  const t = translate(locale as TranslationKey);
  const dateLocale = locale === 'es' ? es : en;

  return { dateLocale, defaultLocale, locale, t };
};
