import { useState } from "react";
import { useTimer } from "../hooks/useTimer";

export default function Main({ MODES }) {

  const [mode, setMode] = useState("focus");


  const handleMode = (mode) => {
    document.body.dataset.mode = mode;
    setMode(mode);
  };


  // timer hook
  const currentMode = MODES[mode]
  const { secondsRemaining, isActive, start, pause, timerFormat } = useTimer(currentMode.minutes)

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:py-16">

      <div
        role="status"
        className="mx-auto mb-10 max-w-2xl border-2 border-black bg-neo-yellow px-4 py-3 text-center text-black shadow-neo"
      >
        <p className="font-bold">A simple focus timer, ready to use</p>
        <p className="mt-1 text-sm sm:text-base">
          Choose a focus or break session and press Start. Timer durations are adjustable in Settings; reports and sign-in are not available yet.
        </p>
      </div>

      <section className="timer mb-24 flex flex-col items-center">
        <div
          role="tablist"
          className="modes mb-12 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => handleMode("focus")}
            role="tab"
            aria-selected={mode === "focus"}
            className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white"
          >
            Pomodoro
          </button>
          <button
            onClick={() => handleMode("short")}
            role="tab"
            aria-selected={mode === "short"}
            className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white"
          >
            Short Break
          </button>
          <button
            onClick={() => handleMode("long")}
            role="tab"
            aria-selected={mode === "long"}
            className="border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-black sm:px-6 aria-selected:bg-black aria-selected:shadow-neo-white cursor-pointer aria-selected:hover:bg-black aria-selected:hover:text-white"
          >
            Long Break
          </button>
        </div>
        <div
          role="timer"
          aria-live="off"
          className="mb-12 whitespace-nowrap font-heading leading-none tabular-nums text-hard-lg text-[clamp(5.5rem,26vw,7rem)] md:text-[12rem]"
        >
          {timerFormat(secondsRemaining)}
        </div>
        {!isActive ? (
          <button
            onClick={start}
            className="border-4 border-black bg-white px-12 py-5 font-heading text-3xl text-black shadow-neo-xl transition hover:-translate-x-1 hover:-translate-y-1 hover:bg-neo-yellow hover:shadow-neo-2xl active:translate-x-2 active:translate-y-2 active:shadow-none md:px-16 md:py-6 md:text-4xl cursor-pointer"
          >
            START
          </button>
        ) : (
          <button
            onClick={pause}
            className="border-4 border-black bg-neo-yellow px-12 py-5 font-heading text-3xl text-black transition  active:translate-x-2 active:translate-y-2 active:shadow-none md:px-16 md:py-6 md:text-4xl cursor-pointer"
          >
            PAUSE
          </button>
        )}
        <div className="text-center status-section mt-10">
          <p className="status-chip inline-block border-2 border-black bg-white px-3 py-1 text-xl text-black shadow-neo">
            #1
          </p>
          <p className="status mt-2 text-2xl text-hard-sm">{currentMode.phrase}</p>
        </div>
      </section>
      <section className="info">
        <h1 className="mb-12 font-heading text-[clamp(2.25rem,6vw,3rem)] leading-[1.1] text-hard">
          Free Online Pomodoro Timer for Focused Work
        </h1>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            What is Brutal Tomato?
          </h2>
          <p className="max-w-3xl text-xl leading-relaxed [text-shadow:1px_1px_0_#000]">
            Brutal Tomato is a free Pomodoro timer that works in desktop and mobile
            browsers. Choose a focus session, a short break, or a long break, then
            adjust each duration in Settings. It is inspired by the{" "}
            <span className="inline-block -rotate-1 border-2 border-black bg-neo-yellow px-1 font-bold text-black shadow-[2px_2px_0_#000] [text-shadow:none]">
              Pomodoro Technique
            </span>
            , a time management method developed by Francesco Cirillo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            What is the Pomodoro Technique?
          </h2>
          <p className="max-w-3xl text-xl leading-relaxed [text-shadow:1px_1px_0_#000]">
            The Pomodoro Technique breaks work into focused intervals, traditionally
            25 minutes long, separated by short breaks. Each interval is a{" "}
            <span className="inline-block -rotate-1 border-2 border-black bg-neo-yellow px-1 font-bold text-black shadow-[2px_2px_0_#000] [text-shadow:none]">
              pomodoro
            </span>
            , the Italian word for tomato, named after the tomato-shaped kitchen
            timer Francesco Cirillo used as a student.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            How to use the timer
          </h2>
          <ol className="max-w-3xl space-y-3.5">
            <li>Choose Pomodoro, Short Break, or Long Break.</li>
            <li>Open Settings if you want to change the session durations.</li>
            <li>Press Start to begin, or Pause when you need to stop.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            Features
          </h2>
          <ul>
            <li>Three sessions for focused work and breaks.</li>
            <li>Adjustable focus, short break, and long break durations.</li>
            <li>Works in a modern desktop or mobile browser.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

