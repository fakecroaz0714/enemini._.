import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cwjyaikfbazouznmwuyh.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_CgSx4T_EldEPNwyy96MDHQ_4AiSf3dy';

export const createClient = (cookieStore: any) => {
  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return cookieStore?.getAll ? cookieStore.getAll() : []
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }: any) => 
              cookieStore?.set ? cookieStore.set(name, value, options) : null
            )
          } catch {
            // The `setAll` method was called from a Server Component.
          }
        },
      },
    },
  );
};

export default createClient;
