import canionTurron from '../assets/canion_turron.png';
import arbolLaser from '../assets/arbol_laser.png';
import renosLanzaMisiles from '../assets/reno_lanza_cohetes.png';
import multiplicadorPuntos from '../assets/multiplicador.png';
import { useCañon } from '../context/CañonContext';


export default function UpgardesBoard() {

    const {state, dispatch} = useCañon();


  return (
    <div>
      <button>
        <img src={canionTurron} alt="Cañón de turrón" width={100}/>
      </button>
      <button>
        <img src={renosLanzaMisiles} alt="Renos lanza misiles" width={100}/>
      </button>
      <button>
        <img src={arbolLaser} alt="Árbol láser" width={100}/>
      </button>

      <button>
        <img src={multiplicadorPuntos} alt="Multiplicador de puntos" width={100}/>
      </button>
    </div>
  )
}


