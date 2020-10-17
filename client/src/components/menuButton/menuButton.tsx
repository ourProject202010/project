import React, {FC} from "react";
import styled from "styled-components";

const Line = styled.div`
    width: 30px;
    height: 3px;
    border-radius: 5px;
    background: #000;
    transform: translateY(5px);
    transition: all .5s ease;
    
    &::after {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background: red;
        transform: translateY(5px);
        transition: all .5s ease;
    }
    
    &::before {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background: red;
        transform: translateY(-8px);
        transition: all .5s ease;
    }
`

const LinesWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    transition: all 1s ease;
`

const MenuButtonWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`

const Hovered = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: -7px;
    z-index: 1;
    cursor: pointer;
    
    &:hover ~ .linesWrapper .line{
    
        background: #ff0000;
        &::before {
            width: 20px;
            transform: translate(-1px, -5px) rotate(148deg);
            background: #000;
        }
        &::after {
            width: 20px;
            transform: translate(-1px, 2px) rotate(-148deg);
            background: #000;
        }
    }
`

const MenuButton:FC<{}> = (props) => {
    return (
        <MenuButtonWrapper>
            <Hovered />
            <LinesWrapper className='linesWrapper'>
                <Line className='line'/>
            </LinesWrapper>
        </MenuButtonWrapper>
    )
}

export default MenuButton;