import translate, { TranslationKey } from '@/i18n';
import { useRouter } from 'next/router';

export const useLocale = () => {
  const { locale, defaultLocale } = useRouter();
  const t = translate(locale as TranslationKey);

  return { locale, defaultLocale, t };
};
