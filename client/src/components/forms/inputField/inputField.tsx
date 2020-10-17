import React, {ChangeEvent, FC} from "react";

type PropsType = {
    type: string,
    name: string,
    value: string,
    label: string
    touched: boolean | undefined
    errors: string | undefined
    handleChange: (e: ChangeEvent) => void
    handleBlur: (e: ChangeEvent) => void
}

const InputField:FC<PropsType> = (props) => {
    const {type, name, value, label, touched, errors, handleBlur, handleChange} = props;
    return (
        <div className='inputWrapper'>
            <input
                type={type}
                id={name}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                required={true}
                className={errors && touched ? 'input-error' : ''}
            />
            <label htmlFor={name}>{label}</label>
            {
                errors && touched ? <p className="error-message">{errors}</p> : null
            }
        </div>
    )
}

export default InputField;