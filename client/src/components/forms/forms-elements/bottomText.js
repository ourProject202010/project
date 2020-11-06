import React from "react";
import styled from 'styled-components';
import {useHistory, Link} from 'react-router-dom';

const BottomText = () => {

	let {pathname} = useHistory().location;
	let content = pathname.includes('/signin') ? <span>Еще нет аккаунта? <Link to='/signup'>Зарегистрироваться</Link></span> : <span>Уже есть аккаунт? <Link to='/signin'>Войти</Link></span>

	return (
		<BottomTextWrapper>
			{content}
		</BottomTextWrapper>
	)
};

const BottomTextWrapper = styled.p`
	text-align: center;
	padding: 10px 0;
`
export default BottomText;
