export type FeedItem = { id: string; src: string; user: string; caption: string }

let counter = 0
const captions = ['Minimal drop','Tech-house groove','EDM pop hook','Deep house vibe','Bassline roller','Crunchy clap','Shimmer lead']

export async function fetchFeedPage(page = 0, pageSize = 5): Promise<{ items: FeedItem[]; hasMore: boolean }> {
  const items: FeedItem[] = Array.from({ length: pageSize }, () => {
    counter += 1
    const id = String(counter)
    return { id, src: '/loops/demo_loop.mp3', user: `@demo${id}`, caption: captions[counter % captions.length] || 'New drop' }
  })
  return { items, hasMore: counter < 1000 }
}
