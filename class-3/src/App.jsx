import MiComponente from './MiComponente'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <MiComponente nombre="Ángel" edad={26} />
      <MiComponente nombre="Sara" edad={24} />
      <MiComponente edad={17} />
    </div>
  )
}

export default App
