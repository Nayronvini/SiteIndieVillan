import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://kijyoxpwwjvykzetgswl.supabase.co"; // 🔹 Substitua pela sua URL
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpanlveHB3d2p2eWt6ZXRnc3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NTk1NTksImV4cCI6MjA1NzUzNTU1OX0.F6hJLs_qQ7U7CHxy51i2PkdJ6BZlYo8uDsy-NfRTcqY"; // 🔹 Substitua pela sua chave API

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
