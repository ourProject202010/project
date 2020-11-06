import React from "react";
import styled from "styled-components";
import useLocation from "../custom-hooks/useLocation";
import Form from "../components/forms/form";

const RightSide = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items: center;
	padding: 20px 20px 20px 0;
`

const Title = styled.h1`
	font-size: 4rem;
	text-align: center;
`

const SubTitle = styled.h2`
	font-size: 2.5rem;
	margin-top: 1rem;
	text-align: center;
`

const Image = styled.img`
	max-width: 100%;
`

const Footer = styled.footer`
	text-align: right;
`

const HomePage = (props) => {

	let hasForm = !props.path;
	const text = (
		<div className="middle">
			<Title>Поиск клиентов стал проще!</Title>
			<SubTitle>Создавайте свою личную страничку, поднимайте личный рейтинг и получайте больше возможностей реализовать свои навыки!</SubTitle>
		</div>
	);

	const content = hasForm ? text : <Form path={props.path}/>;

	return (
		<section>
			<div className='container'>
				<div className="row">
					<div className="left-side">
						<Image src={`${process.env.PUBLIC_URL}/assets/img/login_page_img.jpg`} alt=""/>
					</div>
					<RightSide className="right-side">
						<header></header>
							{content}
						<Footer>
							<span>© Все права защищены</span>
						</Footer>
					</RightSide>
				</div>
			</div>
		</section>
	)
}

export default HomePage;
