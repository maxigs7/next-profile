import { supabase } from '@/lib/supabase';
import { ISkill } from '@/model';
import { PROFILE_USERNAME } from 'config';

const handler = async (): Promise<ISkill[]> => {
  const { data } = await supabase
    .from('skill')
    .select(
      `
      *,
      profile!inner(username)
    `,
    )
    .eq('profile.username', PROFILE_USERNAME)
    .order('name');

  if (!data) return [];
  return data.map((skill) => ({
    ...skill,
    identifier: skill.key,
  }));
};

export default handler;
