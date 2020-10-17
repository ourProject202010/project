import React, {useState} from "react";
import image from './assets/img/login_page_img.jpg';
import styled from 'styled-components'
import SignUp from "../components/forms/signUp/signUp";
import ErrorHandler from "../components/errorHandler/errorHandler";
import MenuButton from "../components/menuButton/menuButton";
import TopMenu from "../components/topMenu/topMenu";

const Image = styled.img`
        max-width: 1000px
        max-height: 100%
    `;

const LeftSide = styled.div`
        width: 900px;
        background: url(${image});
        background-size: cover;
        background-position-y: -300px;
    `;

const RightSide = styled.div`
        position: relative;
        width: 700px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

const LoginPage = () => {

    let [isMenu, setIsMenu] = useState(false)

    const showMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <section className='login-page'>
            <div className="container">
                <div className="row">
                    <TopMenu isMenu={isMenu}/>
                    <LeftSide className="left"></LeftSide>
                    <RightSide className="right">
                        <div className='menuWrapperClicked' onClick={showMenu}>
                            <MenuButton />
                        </div>
                        <ErrorHandler>
                            <SignUp />
                        </ErrorHandler>
                    </RightSide>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;