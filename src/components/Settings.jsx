import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Settings({ onClose, setFocusMinutes, setShortMinutes, setLongMinutes, MODES }) {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }

  })

  const handleFocusMinutes = (event) => {
    setFocusMinutes(event.target.value)
  }

  const handleShortMinutes = (event) => {
    setShortMinutes(event.target.value)
  }


  const handleLongMinutes = (event) => {
    setLongMinutes(event.target.value)
  }

  return (
    <div onClick={onClose} className="overlay fixed inset-0 z-20 flex items-center justify-center bg-black/70 p-4">
      <div onClick={(e) => e.stopPropagation()} className="settings-card w-full max-w-2xl max-h-[90dvh] overflow-auto border-4 border-black bg-cream text-black shadow-(--shadow-neo-xl)">
        <div className="topbar sticky flex  justify-between p-4 bg-neo-blue items-center border-b-4 border-b-black text-white">
          <h2 className="text-2xl tracking-[0.05rem] leading-[1.1] font-heading">SETTINGS</h2>
          <button onClick={onClose} className="cursor-pointer bg-white text-black border-4 border-black p-2 shadow-neo grid place-items-center transition hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-neo-pink hover:shadow-neo-lg active:translate-x-1 active:translate-y-1 active:shadow-none" >
            <X />
          </button>
        </div>
        <div className="content p-8 flex flex-col gap-8">
          <div className="timer">
            <h3 className="font-heading text-[1.25rem] pb-1 border-b-4 border-b-black mb-6 max-w-50">TIMER (MINUTES)</h3>
            <div className="inputs flex flex-col sm:flex-row gap-6">

              <div className="flex flex-col gap-2">
                <label htmlFor="pomodoro">POMODORO</label>
                <input onChange={handleFocusMinutes} name="pomodoro" id="pomodoro" type="number" defaultValue={MODES.focus.minutes} className="w-full bg-white text-black border-4 border-black p-3 font-bold shadow-neo transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:bg-field-focus focus:outline-none focus:shadow-neo-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="short-break">SHORT BREAK</label>
                <input onChange={handleShortMinutes} name="short-break" id="short-break" type="number" defaultValue={MODES.short.minutes} className="w-full bg-white text-black border-4 border-black p-3 font-bold shadow-neo transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:bg-field-focus focus:outline-none focus:shadow-neo-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="long-break">LONG BREAK</label>
                <input onChange={handleLongMinutes} name="long" id="long-break" type="number" defaultValue={MODES.long.minutes} className="w-full bg-white text-black border-4 border-black p-3 font-bold shadow-neo transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:bg-field-focus focus:outline-none focus:shadow-neo-lg" />
              </div>

            </div>
          </div>
          <div className="intervals"></div>
          <div className="alarm"></div>
          <div className="controls"></div>
        </div>
      </div>
    </div>
  )
}