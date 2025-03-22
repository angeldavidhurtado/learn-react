import { useReducer } from 'react'
import './App.css'

const reducer = () => {}
const initialListState = []

function App() {
  const [listState, dispatch] = useReducer(reducer, initialListState)

  return (
    <>
      <div className="agregar-producto">
        <span>Producto</span>
        <input type="text" />
        <button>Agregar</button>
      </div>
      <div className="productos">

      </div>
    </>
  )
}

export default App
