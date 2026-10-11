import Header from "./components/Header"

function App() {

  return (
    <div className="app flex flex-col min-h-dvh">
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:py-16">
        <section className="timer mb-24 flex flex-col items-center">
          <div role="tablist" className="modes mb-12 flex flex-wrap justify-center gap-3">
            <button role="tab" aria-selected={true} className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white">Pomodoro</button>
            <button role="tab" className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white">Short Break</button>
            <button role="tab" className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white">Long Break</button>
          </div>
          <div role="timer" aria-live="off" className="mb-12 whitespace-nowrap font-heading leading-none tabular-nums text-hard-lg text-[clamp(5.5rem,26vw,7rem)] md:text-[12rem]">25:00</div>
          <button className="border-4 border-black bg-white px-12 py-5 font-heading text-3xl text-black shadow-neo-xl transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-neo-yellow hover:shadow-neo-2xl active:translate-x-2 active:translate-y-2 active:shadow-none md:px-16 md:py-6 md:text-4xl">START</button>
        </section>
        <section className="tasks"></section>
        <section className="info"></section>
      </main>
    </div>
  )
}

export default App
