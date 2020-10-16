import React, {FC} from "react";
import styled from "styled-components";

type PropsType = {}

const SocialButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const Image = styled.img`
    max-width: 40px;
`

const SocialButtons: FC<PropsType> = (props) => {
    const publicurl = process.env.PUBLIC_URL;
    return (
        <SocialButtonsWrapper className='social_buttons-wrapper'>
            <Image src={`${publicurl}/assets/img/facebook.png`} alt="facebook" />
            <Image src={`${publicurl}/assets/img/google.png`} alt="google" />
            <Image src={`${publicurl}/assets/img/instagram.png`} alt="instagram" />
        </SocialButtonsWrapper>
    )
}

export default SocialButtons;