import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUBASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASEANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey);