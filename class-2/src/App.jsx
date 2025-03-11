import { useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <p>Contador: {counter}</p>
      <button onClick={ ()=>{setCounter(counter+1)} }>+</button>
      <button onClick={ ()=>{setCounter(e=>e-1)} }>-</button>
      <button onClick={ ()=>{setCounter(e=>0)} }>0</button>
    </div>
  )
}

export default App
