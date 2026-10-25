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

  return (
    <div className="app flex flex-col min-h-dvh">
      {showSettings &&
        <Settings onClose={() => handleShowSettings(false)} />
      }
      <Header showSettings={() => handleShowSettings(true)} />
      <Main />
      <Footer />
    </div>
  )
}

export default App
