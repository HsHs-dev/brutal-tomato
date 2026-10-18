import { useState } from "react";
import { useTimer } from "../hooks/useTimer";

export default function Main() {

  const [mode, setMode] = useState("focus");

  const MODES = {
    focus: {
      mode: "focus",
      minutes: 25
    },
    short: {
      mode: "short",
      minutes: 5
    },
    long: {
      mode: "long",
      minutes: 15
    },
  }

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
        <p className="font-bold">🚧 Under Construction</p>
        <p className="mt-1 text-sm sm:text-base">
          Brutal Tomato is still a work in progress. Some buttons may not work and
          some features are yet not implemented. Thanks for your patience!
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
          <p className="status mt-2 text-2xl text-hard-sm">Time to focus!</p>
        </div>
      </section>
      <section className="tasks"></section>
      <section className="info">
        <h1 className="mb-12 font-heading text-[clamp(2.25rem,6vw,3rem)] leading-[1.1] text-hard">
          An online Pomodoro timer to boost your productivity
        </h1>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            What is Brutal Tomato?
          </h2>
          <p className="max-w-3xl text-xl leading-relaxed [text-shadow:1px_1px_0_#000]">
            A customizable pomodoro timer that works on desktop and mobile
            browsers. It helps you focus on any task you are working on, such as
            study, writing or coding. It is inspired by the{" "}
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
            A timer breaks work into intervals, traditionally 25 minutes long,
            separated by short breaks. Each interval is a{" "}
            <span className="inline-block -rotate-1 border-2 border-black bg-neo-yellow px-1 font-bold text-black shadow-[2px_2px_0_#000] [text-shadow:none]">
              pomodoro
            </span>
            , the Italian word for tomato, after the tomato-shaped kitchen timer
            Cirillo used as a student.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            How to use the timer
          </h2>
          <ol className="max-w-3xl space-y-3.5">
            <li>Add tasks to work on today</li>
            <li>Set estimate pomodoros (1 = 25 min of work) for each task</li>
            <li>Select a task to work on</li>
            <li>Start the timer and focus for 25 minutes</li>
            <li>Take a break for 5 minutes when the alarm rings</li>
            <li>Iterate steps 3 to 5 until your tasks are done</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 inline-block bg-black px-2 pb-1 font-heading text-2xl text-white shadow-neo-white">
            Features
          </h2>
          <ul>
            <li>Estimate finish time for your daily tasks</li>
            <li>Visual reports of your focused hours</li>
            <li>Custom settings for timers, auto-start and alarms</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

