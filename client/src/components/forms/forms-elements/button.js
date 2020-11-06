import React from "react";
import styled from "styled-components";

const Button = ({label}) => {

	return (
		<SubmitButton type='submit'>{label}</SubmitButton>
	)
}

export default Button;

const SubmitButton = styled.button`
		width: 100%;
		padding: 10px;
		background: blue;
		border: 1px solid blue;
		color: #fff;
		border-radius: 5px;
		margin-top: 10px;
		
		&:hover {
			background: #fff;
			color: blue;
		}
		
		&:disabled {
			background: #e3e3e350;
			color: #fff;
		}
	`;
