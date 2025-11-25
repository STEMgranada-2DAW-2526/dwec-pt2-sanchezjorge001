import canionTurron from '../assets/canion_turron.png';
import arbolLaser from '../assets/arbol_laser.png';
import renosLanzaMisiles from '../assets/reno-lanza-cohete.png';
import multiplicadorPuntos from '../assets/multiplicador.png';
import { useCañon } from '../context/CañonContext';


export default function UpgardesBoard() {

    const {state, dispatch} = useCañon();


  return (
    <div>
      <button>
        <img src={canionTurron} alt="Cañón de turrón" />
      </button>
    </div>
  )
}


