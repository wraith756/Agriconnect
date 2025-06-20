import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhbfcjbdwbdbqszefaav.supabase.co"; // Replace
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoYmZjamJkd2JkYnFzemVmYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTkwMjksImV4cCI6MjA2NTU3NTAyOX0.OCMR8CmDV8ssI91YVcFd_KxQ-IroYt7bzsQol0jZu6o"; // Replace

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
