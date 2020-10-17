import React, {FC} from "react";
import {useFormik, Field, Form, FormikErrors} from 'formik';
import validation from "../validation";
import '../style.css'
import SocialButtons from "../socialButtons/socialButtons";
import SubmitButton from "../submitButton/submitButton";
import InputField from "../inputField/inputField";

const SignUp:FC<{}> = (props) => {
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
    const restValues: {[key: string]: string} = {...values};
    const restTouched: {[key: string]: boolean | undefined} = {...touched};
    const restErrors: {[key: string]: string | undefined} = {...errors};

    const getObjLength = (obj: any) => {
        return Object.keys(obj).length;
    }

    const buttonConfig: Array<{[key: string]: string}> = [
        {ru: 'Ваш телефон', en: 'phone'},
        {ru: 'Ваш email', en: 'email'},
        {ru: 'Ваш пароль', en: 'password'},
        {ru: 'Повторите пароль', en: 'repassword'},
    ];

    return (
        <div className='formWrapper'>
            <div className="logo-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=""/>
            </div>
            <form onSubmit={handleSubmit}>
                {
                    buttonConfig.map( (elem) => {
                        let {ru, en} = elem;
                        return (
                            <InputField
                                key={en}
                                type={en === 'password' || en === 'repassword' ? 'password' : en === 'email' ? 'email' : 'text'}
                                name={en}
                                value={restValues[en]}
                                touched={restTouched[en]}
                                errors={restErrors[en]}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                label={ru}
                            />
                        )
                    })
                }
                <p className="center">ИЛИ</p>
                <SocialButtons />
                <SubmitButton
                    disabled={getObjLength(errors) !== 0 || getObjLength(touched) !== getObjLength(values)}
                    title='Зарегистрироваться' />
            </form>
        </div>
    )
}

export default SignUp