import { useState } from 'react'
import './App.css'

function App() {
  const [colombia, setColombia] = useState(0)
  const [euro, setEuro] = useState(0)
  const [argentina, setArgentina] = useState(0)
  const [mexico, setMexico] = useState(0)
  const [dolar, setDolar] = useState(0)

  const cambio = e => {
    const valorDeCambio = {
      pesoColombiano: 1,
      euro: 0.0002201,
      pesoArgentino: 0.0261,
      pesoMexicano: 0.0051,
      dolar: 0.000251
    }

    const value = e.target.value

    setColombia(value)
    setEuro( (value*valorDeCambio.euro).toFixed(2) )
    setArgentina( (value*valorDeCambio.pesoArgentino).toFixed(2) )
    setMexico( (value*valorDeCambio.pesoMexicano).toFixed(2) )
    setDolar( (value*valorDeCambio.dolar).toFixed(2) )
  }

  return (
    <div className="App">
      <ul>
        <li>
          <label htmlFor="colombia">Peso Colombiano</label>
          <input value={colombia} onChange={cambio} className="edit" id="colombia" type="number" />
        </li>
        <li>
          <label htmlFor="euro">Euro</label>
          <input value={euro} id="euro" type="number" readOnly />
        </li>
        <li>
          <label htmlFor="argentina">Peso Argentino</label>
          <input value={argentina} id="argentina" type="number" readOnly />
        </li>
        <li>
          <label htmlFor="mexico">Peso Mexico</label>
          <input value={mexico} id="mexico" type="number" readOnly />
        </li>
        <li>
          <label htmlFor="dolar">Dólar</label>
          <input value={dolar} id="dolar" type="number" readOnly />
        </li>
      </ul>
      
    </div>
  )
}

export default App
