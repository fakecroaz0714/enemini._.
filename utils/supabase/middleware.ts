import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cwjyaikfbazouznmwuyh.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_CgSx4T_EldEPNwyy96MDHQ_4AiSf3dy';

export const createClient = (request: any) => {
  // Create an unmodified response or mock response
  let supabaseResponse = {
    headers: request?.headers || {},
    cookies: request?.cookies || {}
  };

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request?.cookies?.getAll ? request.cookies.getAll() : []
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }: any) => {
            if (request?.cookies?.set) request.cookies.set(name, value);
          });
        },
      },
    },
  );

  return { supabase, supabaseResponse };
};

export default createClient;
