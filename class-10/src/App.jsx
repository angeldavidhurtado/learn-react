import DataFormProvider from './context/DataFormProvider'
import Place from './Place'
import './App.css'

function App() {
  return (
    <DataFormProvider>
      <Place />
    </DataFormProvider>
  )
}

export default App
