import { createClient } from "@supabase/supabase-js";`n`nexport const supabase = createClient(`n  process.env.NEXT_PUBLIC_SUPABASE_URL!,`n  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!`n);
