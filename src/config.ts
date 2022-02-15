if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_ANON_KEY env variable is required');
}
if (!process.env.SUPABASE_URL) {
  throw new Error('SUPABASE_URL env variable is required');
}
if (!process.env.PROFILE_USERNAME) {
  throw new Error('PROFILE_USERNAME env variable is required');
}

export const PROFILE_USERNAME = process.env.PROFILE_USERNAME;
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
export const SUPABASE_URL = process.env.SUPABASE_URL;
