import img0 from './assets/reyes/rey_atanagildo.png'
import img1 from './assets/reyes/rey_sisebuto.png'
import { useRef } from 'react'
import './App.css'


function App() {
  const kings = [
    {img: img0, name: 'Atanagildo'},
    {img: img1, name: 'Sisebuto'}
  ]
  const refBox = useRef()
  const valueChange = 23.16

  const counter = e => {
    const tag = e.target

    let value = Number(tag.innerText) + 1
    if (value >= 10) {
      value = 0
      tag.classList.remove('background-light')
    } else if (value >= 8)
      tag.classList.add('background-light')

    tag.innerText = value
  }

  const valueConversion = () => {
    const tag = refBox.current
    tag.innerText = Number(tag.innerText) * valueChange
  }

  let iKing = 0
  const changeImg = e => {
    iKing = iKing ? 0 : 1
    const tag = e.target
    tag.src = kings[iKing].img
    tag.alt = kings[iKing].name
  }

  return (
    <div className="App">
      <div ref={refBox} className="box" onClick={counter}>1</div>
      <div className="image">
        <img onClick={changeImg} src={kings[0].img} alt={kings[0].name} />
      </div>
      <button onClick={valueConversion}>Conversión</button>
    </div>
  )
}

export default App
