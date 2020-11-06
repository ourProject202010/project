import React from "react";
import withForm from "../hoc-helpers/withForm";
import InputField from "./forms-elements/inputField";
import styled from "styled-components";
import FormLogo from "./forms-elements/formLogo";
import Button from "./forms-elements/button";
import {useHistory} from 'react-router-dom';
import CheckboxField from './forms-elements/checkboxField'
import BottomText from "./forms-elements/bottomText";

const Form = (props) => {
	const {formikData, fields} = props;
	const {pathname} = useHistory().location;
	const buttonLabel = pathname.includes('/signin') ? 'Вход' : 'Регистрация';

	return (
		<FormItem onSubmit={formikData.handleSubmit}>
			<FormLogo />
			{
				fields.map( (field) => {
						return field.type !== 'checkbox' ? <InputField key={field.en} params={field} formikData={formikData}/> :
																							 <CheckboxField key={field.en} params={field} formikData={formikData}/>
				})
			}
			<Button label={buttonLabel}/>
			<BottomText />
		</FormItem>
	)
}

export default withForm(Form);

const FormItem = styled.form`
		border-radius: 5px;
		display: inline-block;
		border: 1px solid #00000050;
		box-shadow: 0 0 7px 4px #00000050;
		padding: 10px;
		max-width: 350px;
	`;
