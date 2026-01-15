import { createClient } from '@supabase/supabase-js'

// Masukkan data proyek Anda langsung di sini
const supabaseUrl = 'https://jjkiqypvedtulctvwigj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqa2lxeXB2ZWR0dWxjdHZ3aWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzODc1NDIsImV4cCI6MjA4Mzk2MzU0Mn0.bz6YdYPgtrlShJts5Hs8M9xBC8LoTnHAo-Bz50IaXrs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)