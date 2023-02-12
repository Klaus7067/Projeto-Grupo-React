import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Hardware from "./pages/Hardware"
import Perifericos from "./pages/Perifericos"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/pages/Home" element={<Home />} />
				<Route path="/pages/Hardware" element={<Hardware />} />
				<Route path="/pages/Perifericos" element={<Perifericos />} />
				<Route path="/pages/Contato" element={<Contato />} />
				<Route path="/pages/Sobre" element={<Sobre />} />
			</Routes>
		</BrowserRouter>
	)
}