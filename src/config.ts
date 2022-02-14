if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_ANON_KEY env variable is required');
}
if (!process.env.SUPABASE_URL) {
  throw new Error('SUPABASE_URL env variable is required');
}

export const PROFILE_ID = Number(process.env.PROFILE_ID);
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
export const SUPABASE_URL = process.env.SUPABASE_URL;
