import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import Preloader from "../preloader/preloader";
import validation from "../forms/validation";

const withForm = (SomeForm) => (props) => {

		const {path} = props;

		const formsConfigs = [
			{
				id: 'signin',
				fields: [
					{ru: 'Ваш телефон', en: 'phone', type: 'text'},
					{ru: 'Ваш имейл', en: 'email', type: 'text'},
					{ru: 'Ваш пароль', en: 'password', type: 'password'},
				]
			},
			{
				id: 'signup',
				fields: [
					{ru: 'Ваш телефон', en: 'phone', type: 'text'},
					{ru: 'Ваш имейл', en: 'email', type: 'text'},
					{ru: 'Ваш пароль', en: 'password', type: 'password'},
					{ru: 'Повторите пароль', en: 'repassword', type: 'password'},
					{ru: 'Вы мастер?', en: 'isMaster', type: 'checkbox'},
					{ru: 'Вы клиент?', en: 'isClient', type: 'checkbox'},
				]
			},
		];

		const [{fields}] = formsConfigs.filter( configItem => configItem.id === path ? configItem : null);

		if (!fields) return <Preloader />

		const initialValues = {};

		fields.forEach( ({ en }) => initialValues[en] = '');


		const formik = useFormik({
			initialValues: {...initialValues},
			validate: validation,
			onSubmit: (values) => {
				console.log(values, 'formik values')
			}
		})

		return <SomeForm {...props} formikData={formik} fields={fields}/>
}

export default withForm;
