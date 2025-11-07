import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ActionRail from '../components/ActionRail'
import { useSnapAutoplay } from '../hooks/useSnapAutoplay'

const posts = [
  { id: '1', src: '/loops/demo_loop.mp3', user: '@demo1', caption: 'Minimal drop' },
  { id: '2', src: '/loops/demo_loop.mp3', user: '@demo2', caption: 'Tech-house groove' },
  { id: '3', src: '/loops/demo_loop.mp3', user: '@demo3', caption: 'EDM pop hook' },
]

export default function Listen() {
  const feedRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!feedRef.current) return
    // prevent iOS rubber-band overscroll feel
    feedRef.current.addEventListener('touchmove', () => {}, { passive: true })
  }, [])
  useSnapAutoplay(feedRef.current)

  return (
    <div
      ref={feedRef}
      className="tiktok-feed h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black text-white select-none"
    >
      {posts.map((p, i) => (
        <section
          key={p.id}
          data-post
          className="h-screen snap-start relative flex items-end justify-center"
          style={{
            background:
              'radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,0.06), transparent), radial-gradient(900px 400px at 50% 100%, rgba(255,0,128,0.08), transparent)',
          }}
        >
          {/* user & caption */}
          <div className="absolute left-4 bottom-32 md:bottom-10 space-y-1 pointer-events-none">
            <div className="font-semibold">{p.user}</div>
            <div className="opacity-80 text-sm">{p.caption}</div>
          </div>

          {/* content card */}
          <div className="w-full max-w-md mx-auto mb-28 md:mb-10 px-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-2xl">
              <audio controls className="w-full" src={p.src} preload="metadata" />
            </div>
          </div>

          <ActionRail onRemix={() => { /* navigate to Create with slug later */ }} />
        </section>
      ))}
    </div>
  )
}
