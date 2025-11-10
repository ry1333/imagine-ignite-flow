-- =====================================================
-- CLEANUP SCRIPT - Run this FIRST if you have errors
-- =====================================================
-- This drops all existing policies and tables so we can start fresh

-- Drop policies first (they depend on tables)
DROP POLICY IF EXISTS "Posts are viewable by everyone" ON public.posts;
DROP POLICY IF EXISTS "Users can insert their own posts" ON public.posts;
DROP POLICY IF EXISTS "Users can update their own posts" ON public.posts;
DROP POLICY IF EXISTS "Users can delete their own posts" ON public.posts;

DROP POLICY IF EXISTS "Reactions are viewable by everyone" ON public.reactions;
DROP POLICY IF EXISTS "Users can insert their own reactions" ON public.reactions;
DROP POLICY IF EXISTS "Users can delete their own reactions" ON public.reactions;

DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

DROP POLICY IF EXISTS "Public Access for Audio Files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload audio files" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own audio files" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own audio files" ON storage.objects;

-- Drop triggers
DROP TRIGGER IF EXISTS update_posts_updated_at ON public.posts;
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;

-- Drop functions
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS update_profiles_updated_at();

-- Drop tables (cascade will remove foreign keys)
DROP TABLE IF EXISTS public.reactions CASCADE;
DROP TABLE IF EXISTS public.posts CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Note: We don't drop the storage bucket as it may contain files
-- If you need to delete it: DELETE FROM storage.buckets WHERE id = 'audio_files';
