import en from './en.json';
import es from './es.json';

type LanguageType = typeof en;
type TranslationType = { en: LanguageType; es: LanguageType };

const TRANSLATIONS: TranslationType = {
  en,
  es,
};

const translate =
  (language: keyof TranslationType = 'en') =>
  (token: keyof LanguageType) => {
    let value;

    try {
      value = TRANSLATIONS[language][token];
    } catch (error) {
      console.error('Translation Error ', error);
      value = token;
    }

    return value;
  };

export type TranslationTokens = keyof LanguageType;
export type TranslationKey = keyof TranslationType;
export default translate;
