# Supabase Setup Guide

This guide will help you set up Supabase for the RMXR DJ app.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your Supabase project created

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Click on the **Settings** (gear icon) in the sidebar
3. Go to **API** settings
4. Copy the following values:
   - **Project URL** (looks like: `https://xxxxxxxxxx.supabase.co`)
   - **Anon/Public key** (starts with `eyJhbGci...`)
   - **Project Reference ID** (the subdomain before `.supabase.co`)

## Step 2: Configure Environment Variables

Your `.env` file is already configured with:

```env
VITE_SUPABASE_PROJECT_ID="yzypyhuabcjdbglywhgv"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
VITE_SUPABASE_URL="https://yzypyhuabcjdbglywhgv.supabase.co"
```

✅ **Your environment is already configured!**

## Step 3: Run Database Migration

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase/migrations/001_initial_setup.sql`
5. Paste it into the SQL editor
6. Click **RUN** button

This will create:
- ✅ `posts` table (for storing music posts)
- ✅ `reactions` table (for likes, saves, shares)
- ✅ `audio_files` storage bucket
- ✅ Row Level Security (RLS) policies
- ✅ Storage policies for file uploads

## Step 4: Verify Setup

### Check Tables

1. In Supabase dashboard, go to **Table Editor**
2. You should see:
   - `posts` table
   - `reactions` table

### Check Storage

1. Go to **Storage** in the sidebar
2. You should see an `audio_files` bucket

### Check Authentication

1. Go to **Authentication** in the sidebar
2. Make sure **Email** provider is enabled

## Step 5: Test the Setup

1. Start your dev server: `npm run dev`
2. Go to http://localhost:8080
3. Test the flow:
   - Sign up for an account
   - Go to DJ Studio (/dj)
   - Load a track (demo or upload)
   - Mix and record
   - Publish your mix
   - Check the Stream page to see your post

## Troubleshooting

### "User must be authenticated" error
- Make sure you're signed in
- Check that your Supabase URL and key are correct in `.env`

### Upload fails
- Verify the `audio_files` bucket exists in Storage
- Check that storage policies were created successfully
- Run this query to check policies:
```sql
SELECT * FROM pg_policies WHERE tablename = 'objects';
```

### Posts don't appear
- Check that RLS policies are enabled
- Verify with: `SELECT * FROM posts;` in SQL Editor
- If you see "0 rows", try creating a test post manually

### Storage permissions error
- Re-run the storage policy section from the migration
- Make sure you're authenticated when uploading

## Database Schema

### Posts Table
```sql
- id: UUID (primary key)
- user_id: UUID (foreign key to auth.users)
- audio_url: TEXT (public URL to audio file)
- bpm: INTEGER (beats per minute)
- key: TEXT (musical key)
- style: TEXT (genre/style)
- parent_post_id: UUID (for remixes)
- challenge_id: UUID (for future challenges)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

### Reactions Table
```sql
- id: UUID (primary key)
- post_id: UUID (foreign key to posts)
- user_id: UUID (foreign key to auth.users)
- type: TEXT ('love', 'comment', 'save', 'share')
- created_at: TIMESTAMP
```

## Next Steps

Once setup is complete:

1. **Test Authentication**: Sign up and sign in
2. **Test Upload**: Record a mix and publish it
3. **Test Feed**: Check if posts appear in Stream
4. **Test Reactions**: Like posts in the feed
5. **Test Remix**: Click remix on a post and load it to DJ

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Check console for errors: Open browser DevTools → Console
- Check Supabase logs: Dashboard → Logs

## Pro Tips

- Enable email confirmations: Authentication → Settings → Enable email confirmations
- Set up custom domain: Project Settings → Custom Domain
- Monitor usage: Dashboard → Usage
- Set up database backups: Database → Backups
