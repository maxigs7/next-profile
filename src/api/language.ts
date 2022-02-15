import { TranslationKey } from '@/i18n';
import { supabase } from '@/lib/supabase';
import { ILanguage } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (locale: TranslationKey): Promise<ILanguage[]> => {
  const { data } = await supabase
    .from('language')
    .select(
      `
      *,
      language_lang!inner(name),
      profile!inner(username)
    `,
    )
    .eq('language_lang.lang', locale)
    .eq('profile.username', PROFILE_USERNAME)
    .order('level', { ascending: false });

  if (!data) return [];
  return data.map(({ language_lang, ...language }) => ({
    ...language,
    ...language_lang[0],
  }));
};

export default handler;
