import img0 from './assets/reyes/rey_incognito.png'
import img1 from './assets/reyes/rey_sisebuto.png'
import img2 from './assets/reyes/rey_leogivildo.png'
import img3 from './assets/reyes/rey_atanagildo.png'
import './App.css'


function App() {
  const reyes = [
    {nombre: 'Incognito', img: img0},
    {nombre: 'Sisebuto', img: img1},
    {nombre: 'Leogivildo', img: img2},
    {nombre: 'Atanagildo', img: img3}
  ]

  const changeImg = e => {
    const img = e.target
    if (img.src.includes('incognito'))
      return img.style.visibility = 'hidden'

    img.src = reyes[0].img
    img.alt = reyes[0].nombre
    img.parentNode.classList.add('background-transparent')
  }

  const changeText = e => {
    const text = e.target
    if (text.innerText == 'Visto')
      text.style.visibility = 'hidden'
    else
      text.innerText = 'Visto'
  }

  return (
    <div className="App">
      <div className="reyes">
        <div className="rey">
          <img onClick={changeImg} src={reyes[1].img} alt={`Rey ${reyes[1].nombre}`} />
          <h3 onClick={changeText}>{reyes[1].nombre}</h3>
        </div>
        <div className="rey">
          <img onClick={changeImg} src={reyes[2].img} alt={`Rey ${reyes[2].nombre}`} />
          <h3 onClick={changeText}>{reyes[2].nombre}</h3>
        </div>
        <div className="rey">
          <img onClick={changeImg} src={reyes[3].img} alt={`Rey ${reyes[3].nombre}`} />
          <h3 onClick={changeText}>{reyes[3].nombre}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
