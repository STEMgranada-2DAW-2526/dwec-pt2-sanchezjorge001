import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import canion from './assets/torre.png'
import { CañonProvider, useCañon } from './context/CañonContext'
import UpgardesBoard from './components/UpgardesBoard.jsx'
import caramelos from './assets/caramelo_sangriento.png'



function AppContent(){
  const {state, dispatch} = useCañon();

  return (
    <div>
      <div>
        <h3>Daño de oleada: {Math.round(state.waveGoal)}</h3>
        <h3>Caramelos: {state.caramels} 
          <img src={caramelos} alt="Caramelos" width={30}/>
        </h3>
        <h3>Numero de Oleada: {state.waveNumber}</h3>
        <h1>Defensor del Polo Norte</h1>
        <button onClick={() => dispatch({type: 'CLICK_SHOT'})}>DISPARAR</button><br/>
        <img src={canion} alt="Cañón" width={200} />
      </div>
      <div>
          <UpgardesBoard />
      </div>
    </div>
    
  );
}


function App() {
  return(
    <CañonProvider>
      <AppContent />
    </CañonProvider>
  )
}

export default App
