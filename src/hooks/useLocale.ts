import translate from '@/i18n';
import { useRouter } from 'next/router';

export const useLocale = () => {
  const { locale, defaultLocale } = useRouter();
  const t = translate(locale);

  return { locale, defaultLocale, t };
};
