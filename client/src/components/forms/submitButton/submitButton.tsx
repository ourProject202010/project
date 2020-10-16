import React, {FC} from "react";
import styled from 'styled-components';

type PropsType = {
    disabled: boolean,
    title: string
}

const Button = styled.button`
    background: linear-gradient(to right, #a3daf3 10%, #17a1df 90%);
    border: none;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    border-radius: 5px;
    transition: all .3s ease;
    text-transform: uppercase;
    font-size: 1.1 rem;
    color: #000;
    &:disabled {
        background: #fff;
        color: #e3e3e3;
        &: hover {
            background: #fff;
            color: #e3e3e3;
        }
    }
    &:hover {
        background: linear-gradient(to left, #a3daf3 10%, #17a1df 90%);
    }
`

const SubmitButton:FC<PropsType> = (props) => {
    const {disabled, title} = props;
    return (
        <Button type='submit' disabled={disabled}>
            {title}
        </Button>
    )
}

export default SubmitButton;