import { X } from 'lucide-react';

export default function Settings({ onClose }) {
  return (
    <div onClick={onClose} className="overlay fixed inset-0 z-20 flex items-center justify-center bg-black/70 p-4">
      <div onClick={(e) => e.stopPropagation()} className="settings-card w-full max-w-2xl max-h-[90dvh] overflow-auto border-4 border-black bg-cream text-black shadow-(--shadow-neo-xl)">
        <div className="topbar sticky flex  justify-between p-4 bg-neo-blue items-center border-b-4 border-b-black text-white">
          <h1 className="text-2xl tracking-[0.05rem] leading-[1.1] font-heading">SETTINGS</h1>
          <button onClick={onClose} className="cursor-pointer bg-white text-black border-4 border-black p-2 shadow-neo grid place-items-center transition hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-neo-pink hover:shadow-neo-lg active:translate-x-1 active:translate-y-1 active:shadow-none" >
            <X />
          </button>
        </div>
        <div className="content p-8 flex gap-8">
          <div className="timer"></div>
          <div className="intervals"></div>
          <div className="alarm"></div>
          <div className="controls"></div>
        </div>
      </div>
    </div>
  )
}