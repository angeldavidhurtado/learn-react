import img1 from './assets/reyes/rey_sisebuto.png'
import img2 from './assets/reyes/rey_leogivildo.png'
import img3 from './assets/reyes/rey_atanagildo.png'

import './App.css'

function App() {
  const nombre = 'Ángel David Hurtado'
  const profesion = 'Web Developer'

  const reyes = [
    {nombre: 'Sisebuto', img: img1},
    {nombre: 'Leogivildo', img: img2},
    {nombre: 'Atanagildo', img: img3}
  ]

  return (
    <>
      <h1>Hola mundo con React</h1>
      <p>Me llamo {nombre} y soy {profesion}</p>

      <div className="reyes">
        <div className="rey">
          <img src={reyes[0].img} alt={`Rey ${reyes[0].nombre}`} />
          <h3>{reyes[0].nombre}</h3>
        </div>
        <div className="rey">
        <img src={reyes[1].img} alt={`Rey ${reyes[1].nombre}`} />
          <h3>{reyes[1].nombre}</h3>
        </div>
        <div className="rey">
          <img src={reyes[2].img} alt={`Rey ${reyes[2].nombre}`} />
          <h3>{reyes[2].nombre}</h3>
        </div>
      </div>
    </>
  )
}

export default App
