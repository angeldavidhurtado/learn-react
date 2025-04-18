import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Place from '@/pages/places/Place'
import FormQuestions from './pages/form-questions/FormQuestions'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Place />} />
				<Route path="/form" element={<FormQuestions />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
