import { Timer, ChartNoAxesCombined, SlidersVertical, User } from 'lucide-react';

export default function Header({ showSettings }) {
  return (
    <header className="flex px-4 py-6 justify-between items-center text-base mx-auto w-full max-w-6xl">
      <a href="#" className="logo flex items-center gap-3 font-heading">
        <span className="bg-black shadow-neo-white rounded-full grid size-10 shrink-0 place-items-center border-2 border-white ">
          <Timer />
        </span>
        <span href="#" className="leading-none text-lg sm:text-2xl">BRUTAL TOMATO</span>
      </a>
      <nav className="links flex gap-1 sm:gap-4 font-bold">
        <button type="button" aria-label="Report" className="flex gap-2 items-center border-2 border-transparent p-2.5 sm:px-3 sm:py-2 hover:border-white hover:bg-black hover:shadow-neo-white cursor-pointer transition active:translate-x-1 active:translate-y-1 active:shadow-none">
          <ChartNoAxesCombined />
          <span className="hidden sm:inline">
            Report
          </span>
        </button>
        <button onClick={showSettings} type="button" aria-label="Settings" className="flex gap-2 items-center border-2 border-transparent p-2.5 sm:px-3 sm:py-2 hover:border-white hover:bg-black hover:shadow-neo-white cursor-pointer transition active:translate-x-1 active:translate-y-1 active:shadow-none">
          <SlidersVertical />
          <span className="hidden sm:inline">
            Settings
          </span>
        </button>
        <button type="button" aria-label="Sign In" className="flex gap-2 items-center text-black bg-white shadow-neo border-2 border-black p-2.5 sm:px-4 sm:py-2 cursor-pointer transition active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-neo-yellow">
          <User />
          <span className="hidden sm:inline">
            Sign In
          </span>
        </button>
      </nav>
    </header>
  )

}
