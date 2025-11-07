import { useEffect } from 'react'

/**
 * Autoplays the <audio data-post> whose section is most visible.
 * Call with a container element ref.
 */
export function useSnapAutoplay(container: HTMLElement | null) {
  useEffect(() => {
    if (!container) return
    const items = Array.from(container.querySelectorAll<HTMLElement>('[data-post]'))
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with highest intersectionRatio
        const best = entries.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
        if (!best?.isIntersecting) return
        const el = best.target as HTMLElement
        // pause others
        items.forEach((it) => {
          const au = it.querySelector('audio')
          if (au && it !== el) au.pause()
        })
        // play focused
        const audio = el.querySelector('audio')
        if (audio) {
          // restart from start if ended
          if (audio.currentTime >= (audio.duration || 1) - 0.05) audio.currentTime = 0
          audio.play().catch(() => {}) // ignore autoplay block; user will tap
        }
      },
      { root: container, threshold: [0.25, 0.5, 0.75] }
    )
    items.forEach((it) => observer.observe(it))
    return () => observer.disconnect()
  }, [container])
}
