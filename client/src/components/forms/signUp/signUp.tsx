import React, {FC} from "react";
import {useFormik, Field, Form} from 'formik';
import validation from "../validation";
import '../style.css'

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
    const {errors, touched, handleSubmit} = formik;

    return (
        <div className='formWrapper'>
            <div className="logo-wrapper">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=""/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='inputWrapper'>
                    <input
                        type='text'
                        id='phone'
                        name='phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        required={true}
                        className={errors.phone && touched.phone ? 'input-error' : ''}
                    />
                    <label htmlFor='phone'>Ваш телефон</label>
                    {
                        errors.phone && touched.phone ? <p className="error-message">{errors.phone}</p> : null
                    }
                </div>
                <div className='inputWrapper'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.email && touched.email ? 'input-error' : ''}
                    />
                    <label htmlFor='email'>Ваш email</label>
                    {
                        errors.email && touched.email ? <p className="error-message">{errors.email}</p> : null
                    }
                </div>
                <div className='inputWrapper'>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.password && touched.password ? 'input-error' : ''}
                    />
                    <label htmlFor='password'>Ваш пароль</label>
                    {
                        errors.password && touched.password ? <p className="error-message">{errors.password}</p> : null
                    }
                </div>
                <div className='inputWrapper'>
                    <input
                        type='password'
                        id='repassword'
                        name='repassword'
                        onChange={formik.handleChange}
                        value={formik.values.repassword}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.repassword && touched.repassword ? 'input-error' : ''}
                    />
                    <label htmlFor='repassword'>Повторите пароль</label>
                    {
                        errors.repassword && touched.repassword ? <p className="error-message">{errors.repassword}</p> : null
                    }
                </div>
                <p className="center">
                    ИЛИ
                </p>
                <button type='submit'>Регистриция</button>
            </form>
        </div>
    )
}

export default SignUp