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
				<Route path="/" element={<Home />} />
				<Route path="/Hardware" element={<Hardware />} />
				<Route path="/Perifericos" element={<Perifericos />} />
				<Route path="/Contato" element={<Contato />} />
				<Route path="/Sobre" element={<Sobre />} />
			</Routes>
		</BrowserRouter>
	)
}