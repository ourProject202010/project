import React, {FC} from "react";
import {useFormik, Field, Form, FormikErrors} from 'formik';
import validation from "../validation";
import '../style.css'
import SocialButtons from "../socialButtons/socialButtons";
import SubmitButton from "../submitButton/submitButton";
import InputField from "../inputField/inputField";

type PropsType = {}

const SignUp:FC<PropsType> = (props) => {

    const formik = useFormik({
        initialValues: {
            phone: '',
            email: '',
            password: '',
            repassword: ''
        },
        validate: validation,
        onSubmit: values => {
            console.log(values)
        }
    })
    const {errors, values, touched, handleSubmit, handleChange, handleBlur} = formik;

    const getObjLength = (obj: any) => {
        return Object.keys(obj).length;
    }

    // const buttonConfig: Array<{[key: string]: string}> = [
    //     {ru: 'Ваш телефон', en: 'phone'},
    //     {ru: 'Ваш email', en: 'email'},
    //     {ru: 'Ваш пароль', en: 'password'},
    //     {ru: 'Повторите пароль', en: 'repassword'},
    // ]

    return (
        <div className='formWrapper'>
            <div className="logo-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=""/>
            </div>
            <form onSubmit={handleSubmit}>
                <InputField
                    type='text'
                    name='phone'
                    value={values.phone}
                    touched={touched['phone']}
                    errors={errors.phone}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Ваш телефон'
                />
                <InputField
                    type='email'
                    name='email'
                    value={values.email}
                    touched={touched['email']}
                    errors={errors.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Ваш email'
                />
                <InputField
                    type='password'
                    name='password'
                    value={values.password}
                    touched={touched['password']}
                    errors={errors.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Ваш пароль'
                />
                <InputField
                    type='password'
                    name='repassword'
                    value={values.repassword}
                    touched={touched['repassword']}
                    errors={errors.repassword}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    label='Повторите пароль'
                />
                <p className="center">ИЛИ</p>
                <SocialButtons />
                <SubmitButton
                    disabled={getObjLength(errors) !== 0 || getObjLength(touched) !== getObjLength(formik.values)}
                    title='Зарегистрироваться' />
            </form>
        </div>
    )
}

export default SignUp