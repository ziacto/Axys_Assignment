// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://hidmfykvjtselmttukdg.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZG1meWt2anRzZWxtdHR1a2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NTk5MjcsImV4cCI6MjA4MDUzNTkyN30.KfQwcqIZ_Z3zN_1fTUUWZg4b3Uo6cbyywyLdbgjT0Fs'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
