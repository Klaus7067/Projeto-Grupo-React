import React from "react"

import Header from "../../components/Header"
import NavBar from "../../components/NavBar/NavBar"

import { StyledHome } from "./styles"

export default function Home() {
	return (
		<StyledHome>
			<Header />
			<NavBar/>
		</StyledHome>
	)
}