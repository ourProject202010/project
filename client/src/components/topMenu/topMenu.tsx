import React, {FC, Props} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

type PropsType = {
    isMenu: boolean
}
const TopMenu:FC<PropsType> = (props) => {

    const TopMenuWrapper = styled.div`
        transform: translate(${props.isMenu ? '1000px' : '2000px'}, 15px);
        position: fixed;
        z-index: 1;
        background: #009bdf;
    `
    const MenuList = styled.ul`
        display: flex;
        list-style: none;
    `

    const Li = styled.li`
        & > a {
            padding: 15px 35px;
            color: red;
            display: block;
        }
    `

    return (
        <TopMenuWrapper>
            <MenuList className="menu-list">
                <Li className="menu-item">
                    <Link to='/main'>Главная</Link>
                </Li>
                <Li className="menu-item">
                    <Link to='/'>Контакты</Link>
                </Li>
                <Li className="menu-item">
                    <Link to='/'>О сервисе</Link>
                </Li>
            </MenuList>
        </TopMenuWrapper>
    )
}

export default TopMenu;