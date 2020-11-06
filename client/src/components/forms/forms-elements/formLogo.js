import React from 'react';
import styled from "styled-components";

const FormLogo = () => {

	return (
		<FormLogoWrapper>
			<Image src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}/>
		</FormLogoWrapper>
	)
}

export default FormLogo;


const FormLogoWrapper = styled.div`
		text-align: center;
		margin-bottom: 1.5rem;
	`;

const Image = styled.img`
		width: 65%;
	`;
