import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CañonProvider } from './context/CañonContext'
import UpgardesBoard from './components/UpgardesBoard.jsx'

function App() {
  

  return (
    <CañonProvider>
      <UpgardesBoard />
    </CañonProvider>
  )
}

export default App
