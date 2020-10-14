import React, {FC} from "react";
import {useFormik} from 'formik';
import validation from "../validation";
import styled from 'styled-components'
import '../style.css'

type PropsType = {}

const SignUp:FC<PropsType> = (props) => {

    console.log(process.env.PUBLIC_URL)



    const formik = useFormik({
        initialValues: {
            phone: '',
            email: '',
            password: ''
        },
        validate: validation,
        onSubmit: values => {
            console.log(values)
        }
    })
    const {errors, touched, handleSubmit} = formik;

    const LogoWrapper = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    `;

    const Logo = styled.img`
        max-width: 50%;
    `
    const FormWrapper = styled.div`
        background: #e3e3e3;
        padding: 35px 25px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 5px #e3e3e3b5;
    `;

    const InputWrapper = styled.div`
        position: relative;
    `;

    const Label = styled.label`
        position: absolute;
        top: 10px;
        left:20px;
    `;

    const Input = styled.input`
        border: 1px solid #0099dd;
        width: 100%;
        padding 10px 0 10px 20px;
        margin-bottom: 20px;
        border-radius:10px;
        box-sizing: border-box;
        outline: none;
    `;

        return (
        <FormWrapper className='formWrapper'>
            <LogoWrapper className="logo-wrapper">
                <Logo src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt=""/>
            </LogoWrapper>
            <form onSubmit={handleSubmit}>
                <InputWrapper className='inputWrapper'>
                    <Input
                        type='text'
                        id='phone'
                        name='phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.phone && touched.phone ? 'input-error' : ''}
                    />
                    <Label htmlFor='phone' className={errors.phone && touched.phone ? 'label-error' : ''}>
                        {errors.phone && touched.phone ? errors.phone : 'Ваш номер телефона'}
                    </Label>
                </InputWrapper>
                <InputWrapper className='inputWrapper'>
                    <Input
                        type='text'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.email && touched.email ? 'input-error' : ''}
                    />
                    <Label htmlFor='email' className={errors.email && touched.email ? 'label-error' : ''}>
                        {errors.email && touched.email ? errors.email : 'Ваш email'}
                    </Label>
                </InputWrapper>
                <InputWrapper className='inputWrapper'>
                    <Input
                        type='password'
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        required={true}
                        className={errors.password && touched.password ? 'input-error' : ''}
                    />
                    <Label htmlFor='password' className={errors.password && touched.password ? 'label-error' : ''}>
                        {errors.password && touched.password ? errors.password : 'Ваш пароль'}
                    </Label>
                </InputWrapper>
                <button type='submit'>Регистриция</button>
            </form>
        </FormWrapper>
    )
}

export default SignUp