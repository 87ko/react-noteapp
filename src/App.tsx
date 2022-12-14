import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/contents" element={<Content />}></Route>
				<Route path="/contents/:id" element={<Content />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
