import React, {FC} from "react";
import styled from "styled-components";

type PropsType = {}

const SocialButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const SocialButtons: FC<PropsType> = (props) => {
    return (
        <SocialButtonsWrapper className='social_buttons-wrapper'>

        </SocialButtonsWrapper>
    )
}