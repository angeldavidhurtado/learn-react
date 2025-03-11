import { useState } from 'react'
import './App.css'


function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  
  const add = () => {
    setC(a + b)
  }

  return (
    <div className="App">
      <input type="number" value={a} onChange={e=>{setA(Number(e.target.value))}} /> +
      <input type="number" value={b} onChange={e=>{setB(Number(e.target.value))}} /> =
      <input type="number" value={c} readOnly />
      <button onClick={add}>Sumar</button>
    </div>
  )
}

export default App
