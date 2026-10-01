import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  (typeof import.meta !== 'undefined' && (import.meta.env?.VITE_SUPABASE_URL || import.meta.env?.NEXT_PUBLIC_SUPABASE_URL)) ||
  'https://cwjyaikfbazouznmwuyh.supabase.co';

const supabaseKey = 
  (typeof import.meta !== 'undefined' && (import.meta.env?.VITE_SUPABASE_ANON_KEY || import.meta.env?.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)) ||
  'sb_publishable_CgSx4T_EldEPNwyy96MDHQ_4AiSf3dy';

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
