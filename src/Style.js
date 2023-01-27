import styled, { keyframes } from "styled-components";

export const shakeHorizontal = keyframes`
	0% {
			transform: translateY(-45px);
			animation-timing-function: ease-in;
			opacity: 1;
		}
		24% {
			opacity: 1;
		}
		40% {
			transform: translateY(-24px);
			animation-timing-function: ease-in;
		}
		65% {
			transform: translateY(-12px);
			animation-timing-function: ease-in;
		}
		82% {
			transform: translateY(-6px);
			animation-timing-function: ease-in;
		}
		93% {
			transform: translateY(-4px);
			animation-timing-function: ease-in;
		}
		25%,
		55%,
		75%,
		87% {
			transform: translateY(0);
			animation-timing-function: ease-out;
		}
		100% {
			transform: translateY(0);
			animation-timing-function: ease-out;
			opacity: 1;
		}
`;

export const ContainerAstroMatch = styled.main`
	width: 400px;
	height: 600px;

	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: 5px;
	background: linear-gradient(to top, #192a56, #273c75);

	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	border: 1px solid #45a4f7;
`;
