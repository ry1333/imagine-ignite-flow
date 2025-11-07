import { z } from 'zod'

const Env = z.object({
  VITE_SUPABASE_URL: z.string().url().optional(),
  VITE_SUPABASE_ANON_KEY: z.string().optional(),
  VITE_POST_MAX_SECONDS: z.string().optional(),
}).catchall(z.any())

// Validate if possible, but NEVER throw
let parsed: any
try { parsed = Env.safeParse(import.meta.env) } catch { parsed = { success: false, data: {} } }

// Merge validated fields over Vite env; keep everything optional
export const env: any = { ...(import.meta.env as any), ...(parsed?.success ? parsed.data : {}) }

export const MAX_SECONDS = Number(env.VITE_POST_MAX_SECONDS ?? 40)
export const hasSupabase = Boolean(env.VITE_SUPABASE_URL && env.VITE_SUPABASE_ANON_KEY)
