import { supabase } from '@/integrations/supabase/client'

/**
 * Upload an audio file to Supabase Storage
 * @param blob - The audio file as a Blob
 * @param fileName - Optional custom filename
 * @returns The public URL of the uploaded file
 */
export async function uploadAudio(blob: Blob, fileName?: string): Promise<string> {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User must be authenticated to upload audio')
  }

  // Generate unique filename
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substring(7)
  const extension = blob.type.includes('webm') ? 'webm' : 'mp3'
  const finalFileName = fileName || `mix_${timestamp}_${randomId}.${extension}`
  const filePath = `${user.id}/${finalFileName}`

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from('audio_files')
    .upload(filePath, blob, {
      contentType: blob.type,
      upsert: false
    })

  if (error) {
    console.error('Upload error:', error)
    throw new Error('Failed to upload audio: ' + error.message)
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('audio_files')
    .getPublicUrl(data.path)

  return publicUrl
}

/**
 * Delete an audio file from Supabase Storage
 * @param url - The public URL of the file to delete
 */
export async function deleteAudio(url: string): Promise<void> {
  // Extract the path from the URL
  const urlObj = new URL(url)
  const pathMatch = urlObj.pathname.match(/\/audio_files\/(.+)/)

  if (!pathMatch) {
    throw new Error('Invalid audio URL')
  }

  const filePath = pathMatch[1]

  const { error } = await supabase.storage
    .from('audio_files')
    .remove([filePath])

  if (error) {
    console.error('Delete error:', error)
    throw new Error('Failed to delete audio: ' + error.message)
  }
}
