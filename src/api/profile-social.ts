import { supabase } from '@/lib/supabase';
import { ISocialProfile } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (): Promise<ISocialProfile[]> => {
  const { data } = await supabase
    .from('profile_social')
    .select(
      `
      network,
      username,
      url,
      profile!inner(username)
    `,
    )
    .eq('profile.username', PROFILE_USERNAME);

  return data as ISocialProfile[];
};

export default handler;
