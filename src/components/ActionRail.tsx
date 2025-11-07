import { Heart, Share2, Wand2 } from 'lucide-react'

export default function ActionRail({ onRemix }: { onRemix: () => void }) {
  const Btn = ({ icon: Icon, label }: { icon: any; label: string }) => (
    <button className="flex flex-col items-center gap-1 rounded-2xl bg-white/70 hover:bg-white p-2">
      <Icon size={22} />
      <span className="text-[11px] leading-none">{label}</span>
    </button>
  )
  return (
    <div className="pointer-events-auto fixed right-3 bottom-28 md:bottom-6 flex flex-col gap-3">
      <Btn icon={Heart} label="Like" />
      <Btn icon={Share2} label="Share" />
      <button onClick={onRemix} className="flex flex-col items-center gap-1 rounded-2xl bg-black text-white p-2">
        <Wand2 size={22} />
        <span className="text-[11px] leading-none">Remix</span>
      </button>
    </div>
  )
}
