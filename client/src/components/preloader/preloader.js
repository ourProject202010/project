import React from 'react';
import styled, {keyframes} from "styled-components";

const Preloader = () => {

	const PreloaderWrapper = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		position: relative;
	`;

	const rotateFirst = keyframes`
		from {
			transform: rotate(359deg)
		}
		to {
			transform: rotate(0deg)
		}
	`;

	const rotateSecond = keyframes`
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(359deg)
		}
	`;

	const First = styled.div`
		position: absolute;
		border-top: 3px solid green;
		border-bottom: 3px solid black;
		border-left: 3px solid transparent;
		border-right: 3px solid transparent;
		border-radius: 50%;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		transform: rotate(359deg);
		animation: ${rotateFirst} 2s linear infinite;
	`;

	const Second = styled(First)`
		border-left: 3px solid yellow;
		border-right: 3px solid pink;
		border-top: 3px solid transparent;
		border-bottom: 3px solid transparent;
		height: 80%;
		width: 80%;
		transform: rotate(0deg);
		animation: ${rotateSecond} 2s linear infinite;
	`;
	
	return (
		<PreloaderWrapper>
			<First></First>
			<Second></Second>
		</PreloaderWrapper>
	)
}

export default Preloader;
