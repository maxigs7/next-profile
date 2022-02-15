import { TranslationKey } from '@/i18n';
import { supabase } from '@/lib/supabase';
import { IProfile } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (locale: TranslationKey): Promise<IProfile> => {
  const {
    data: { profile_lang, ...profile },
  } = await supabase
    .from('profile')
    .select(
      `
      *,
      profile_social (
        network,
        username,
        url
      ),
      profile_lang (
        title,
        summary
      )
    `,
    )
    .eq('profile_lang.lang', locale)
    .eq('username', PROFILE_USERNAME)
    .single();

  return {
    ...profile,
    ...profile_lang[0],
  };
};

export default handler;
