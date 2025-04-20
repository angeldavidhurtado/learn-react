import { HashRouter, Routes, Route } from 'react-router-dom'
import Place from '@/pages/places/Place'
import FormQuestions from './pages/form-questions/FormQuestions'
const baseUrl = import.meta.env.BASE_URL

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Place />} />
				<Route path="/form" element={<FormQuestions />} />
			</Routes>
		</HashRouter>
	)
}

export default App
