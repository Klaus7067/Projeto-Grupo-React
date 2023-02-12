import React from "react"

import Header from "../../components/Header"

import { StyledHome } from "./styles"

export default function Home() {
	return (
		<StyledHome>
			<Header />
			<h1>Home</h1>
		</StyledHome>
	)
}