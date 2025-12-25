
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Fallback for development without keys - allows UI development to proceed
export const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

if (!supabaseUrl && typeof window !== 'undefined') {
    console.warn('Supabase keys missing! Real-time features will not work.');
}
