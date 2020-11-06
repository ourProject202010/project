import React from 'react';
import styled from "styled-components";

const CheckboxField = (props) => {
	const {params: {ru, en, type}, formikData: {handleBlur, handleChange, value, errors, touched}} = props;
	let hasError = errors[en] && touched[en]
	let labelText = hasError ? errors[en] : ru;
	let labelClass = hasError ? 'error-label' : '';
	let inputClass = hasError ? 'error-input' : '';
	return (
		<CheckboxFieldWrapper>
			<Input
				id={en}
				name={en}
				onBlur={handleBlur}
				onChange={handleChange}
				required={true}
				value={value}
				type={type}
				className={inputClass}
			/>
			<Label className={labelClass} htmlFor={en}>{labelText}</Label>
		</CheckboxFieldWrapper>
	)
}

export default CheckboxField;

const CheckboxFieldWrapper = styled.div`
		position: relative;
	`;

const Label = styled.label`
	position: relative;
	top: -2px;
		
			&::before {
				content: '';
				display: inline-block;
				width: 40px;
				height: 18px;
				border: 1px solid #0099dd;
				padding: 1px;
				border-radius: 2px;
				transform: translateY(5px);
				margin-right: 5px;
			}
			&::after {
				content: '';
		    position: absolute;
		    display: block;
		    width: 16px;
		    height: 16px;
		    top: 0px;
		    left: 2px;
		    padding: 1px;
		    border-radius: 2px;
		    background: red;
		    margin-right: 3px;
		    transition: all .2s ease;
			}
	`;

const Input = styled.input`
	display: none;
	&:checked ~ ${Label} {
		&::after {
					left: 24px;
					background: green;
				}
	}
	
	`
