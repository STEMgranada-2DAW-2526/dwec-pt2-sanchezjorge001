import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import canion from './assets/torre.png'
import { CañonProvider, useCañon } from './context/CañonContext'
import UpgardesBoard from './components/UpgardesBoard.jsx'



function AppContent(){
  const {state, dispatch} = useCañon();

  return (
    <div>
      <div>
        <h1>Defensor del Polo Norte</h1>
        <button>DISPARAR</button><br/>
        
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


}

function App() {

}

export default App
