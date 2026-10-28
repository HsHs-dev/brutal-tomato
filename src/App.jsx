import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Settings from "./components/Settings"

function App() {

  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = (val) => {
    setShowSettings(val)
  }

  const [focusMinutes, setFocusMinutes] = useState(25)
  const [shortMinutes, setShortMinutes] = useState(5)
  const [longMinutes, setLongMinutes] = useState(15)

  const MODES = {
    focus: {
      mode: "focus",
      minutes: focusMinutes,
      phrase: "Time to focus!"
    },
    short: {
      mode: "short",
      minutes: shortMinutes,
      phrase: "Take a five but come back!"
    },
    long: {
      mode: "long",
      minutes: longMinutes,
      phrase: "Breathe for a bit, you earned it!"
    },
  }

  return (
    <div className="app flex flex-col min-h-dvh">
      {showSettings &&
        <Settings onClose={() => handleShowSettings(false)} setFocusMinutes={setFocusMinutes} setShortMinutes={setShortMinutes} setLongMinutes={setLongMinutes} MODES={MODES} />
      }
      <Header showSettings={() => handleShowSettings(true)} />
      <Main MODES={MODES} />
      <Footer />
    </div>
  )
}

export default App
