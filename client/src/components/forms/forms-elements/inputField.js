import React from 'react';
import styled from "styled-components";

const InputField = (props) => {
	const {params: {ru, en, type}, formikData: {handleBlur, handleChange, values, errors, touched}} = props;
	let hasError = errors[en] && touched[en]
	let labelText = hasError ? errors[en] : ru;
	let labelClass = hasError ? 'error-label' : '';
	let inputClass = hasError ? 'error-input' : '';
	return (
		<InputFieldWrapper>
			<Input
				id={en}
				name={en}
				onBlur={handleBlur}
				onChange={handleChange}
				required={true}
				type={type}
				className={inputClass}
			/>
			<Label className={labelClass} htmlFor={en}>{labelText}</Label>
		</InputFieldWrapper>
	)
}

export default InputField;

const InputFieldWrapper = styled.div`
		position: relative;
		margin-bottom: 20px;
	`;

const Label = styled.label`
		position: absolute;
		left: 10px;
		top: 13px;
		background: #fff;
		padding: 0 5px;
		transition: all .2s ease;
	`;

const Input = styled.input`
		border: 1px solid #0099dd;
		border-radius: 5px;
		padding: 10px 10px;
		width: 100%;
		box-sizing: border-box;
		outline: none;
		
		&:focus ~ ${Label} {
			top: -4px;
			font-size: .8rem;
			color: #0099dd;
		}

		&:valid ~ ${Label} {
			top: -4px;
			font-size: .8rem;
			color: #0099dd;
		}
	`
