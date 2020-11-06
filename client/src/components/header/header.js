import React from "react";
import styled from "styled-components";
import HeaderNav from "../header-nav/header-nav";

const MainHeader = styled.header`
	position: absolute;
	top:0;
	left:0;
	width: 100vw;
	box-sizing: border-box;
	padding: 1rem;
	background: #5e5e5e15;
`
	const HeaderContent = styled.div`
		display: flex;
		justify-content: flex-end
	`

const Header = () => {
	return (
		<MainHeader>
			<div className="container">
				<HeaderContent>
					<HeaderNav />
				</HeaderContent>
			</div>
		</MainHeader>
	)
}

export default Header
