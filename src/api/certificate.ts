import { TranslationKey } from '@/i18n';
import { supabase } from '@/lib/supabase';
import { ICertificate } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (locale: TranslationKey): Promise<ICertificate[]> => {
  const { data } = await supabase
    .from('certificate')
    .select(
      `
      *,
      certificate_lang!inner(name),
      profile!inner(username)
    `,
    )
    .eq('certificate_lang.lang', locale)
    .eq('profile.username', PROFILE_USERNAME)
    .order('date', { ascending: false });

  if (!data) return [];
  return data.map(({ certificate_lang, ...certificate }) => ({
    ...certificate,
    ...certificate_lang[0],
  }));
};

export default handler;
