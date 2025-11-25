import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import canion from './assets/torre.png'

import { CañonProvider } from './context/CañonContext'
import UpgardesBoard from './components/UpgardesBoard.jsx'

function App() {
  

  return (
    <div>
      <div>
        <h1>Defensor del Polo Norte</h1>
        <img src={canion} alt="Cañón" width={200} />
      </div>
      <div>
        <CañonProvider>
          <UpgardesBoard />
        </CañonProvider>
      </div>
    </div>
    
  )
}

export default App
