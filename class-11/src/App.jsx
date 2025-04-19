import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Place from '@/pages/places/Place'
import FormQuestions from './pages/form-questions/FormQuestions'
const baseUrl = import.meta.env.BASE_URL

function App() {
	return (
		<BrowserRouter basename={baseUrl}>
			<Routes>
				<Route path="/" element={<Place />} />
				<Route path="/form" element={<FormQuestions />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
