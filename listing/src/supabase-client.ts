import { createClient } from "@supabase/supabase-js";
import type {Database} from './database.types'
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log({ supabaseURL, supabaseKey }); // check if they are undefined
const supabase = createClient<Database>(supabaseURL, supabaseKey);

export default supabase