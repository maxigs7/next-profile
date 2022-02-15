import { TranslationKey } from '@/i18n';
import { supabase } from '@/lib/supabase';
import { IWork } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (locale: TranslationKey): Promise<IWork[]> => {
  const { data } = await supabase
    .from('experience')
    .select(
      `
      *,
      experience_lang!inner(position, summary),
      profile!inner(username)
    `,
    )
    .eq('experience_lang.lang', locale)
    .eq('profile.username', PROFILE_USERNAME)
    .order('startDate', { ascending: false });

  if (!data) return [];
  return data.map(({ experience_lang, ...experience }) => ({
    ...experience,
    ...experience_lang[0],
  }));
};

export default handler;
