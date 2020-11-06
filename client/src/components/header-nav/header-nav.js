import React, {useEffect, useState} from "react";
import useLogin from "../../custom-hooks/isLoggedIn";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useHistory, useParams} from 'react-router-dom';

const HeaderNav = () => {
	const {pathname} = useHistory().location;
	const [path, setPath] = useState('/');

	const par = useParams();

	console.log(par)
	useEffect(() => {
		let newPath = pathname.match(/$\/^/) ? '/signin' : '/';
		console.log(newPath)
		setPath(newPath)
		console.log(path)
	}, [pathname])

	const StyledNavLink = styled(NavLink)`
		display: inline-block;
		padding: 5px 30px;
		position: relative;
		box-sizing: border-box;
		
		&:before {
			content: '';
			position: absolute;
			height: 2px;
			width: 5%;
			left: 0;
			bottom: 0;
			background: #0099dd;
			transition: all .4s ease-out;
		}
		
		&:after {
			content: '';
			position: absolute;
			height: 2px;
			width: 3%;
			left: 0;
			bottom: 0;
			background: #5e5e5e;
			transition: all .2s ease-in;
		}
		
		&:hover::after {
			width: 50%;
		}
		
		&:hover::before {
			width: 100%;
		}
	`

	return (
		<nav>
			<StyledNavLink to='/'>
				Главная
			</StyledNavLink>
			<StyledNavLink to='/'>
				Профиль
			</StyledNavLink>
			<StyledNavLink to='/signin'>
				Вход
			</StyledNavLink>
		</nav>
	)
}

export default HeaderNav;
