import { useEffect, useRef } from 'react'

type Props = {
  audioBuffer: AudioBuffer | null
  progress: number // 0..1
}

export default function WaveformCanvas({ audioBuffer, progress }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !audioBuffer) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height

    // Clear canvas
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    // Draw waveform
    const data = audioBuffer.getChannelData(0)
    const step = Math.ceil(data.length / width)
    const amp = height / 2

    ctx.strokeStyle = '#22c55e' // green color
    ctx.lineWidth = 1
    ctx.beginPath()

    for (let i = 0; i < width; i++) {
      const min = Math.min(...Array.from({ length: step }, (_, j) => data[i * step + j] || 0))
      const max = Math.max(...Array.from({ length: step }, (_, j) => data[i * step + j] || 0))

      if (i === 0) {
        ctx.moveTo(i, amp + min * amp)
      } else {
        ctx.lineTo(i, amp + min * amp)
      }
      ctx.lineTo(i, amp + max * amp)
    }

    ctx.stroke()

    // Draw progress indicator
    if (progress > 0) {
      const progressX = progress * width
      ctx.strokeStyle = '#ef4444' // red color
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(progressX, 0)
      ctx.lineTo(progressX, height)
      ctx.stroke()
    }
  }, [audioBuffer, progress])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-20 rounded border border-white/10 bg-black"
      style={{ width: '100%', height: '80px' }}
    />
  )
}
