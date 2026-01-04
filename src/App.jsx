import React, { useState } from 'react'
import Start_Page from './assets/components/Start_Page'
import GamePage from "./assets/components/GamePage.jsx"
import "./App.css"
const App = () => {
  
  const [IsStarted, setIsStarted] = useState(false)
  const handleGameStart = () =>{
    setIsStarted((prev) => !prev)
  }
  return (
    <div>
      {IsStarted ?<GamePage />:<Start_Page
      StartGame = {handleGameStart}
      />}
     
    </div>
  )
}

export default App