import styled from "styled-components";

export const ContainerLoading = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ImageHeart = styled.img`
	width: 60px;

	animation: heartbeat 0.6s linear infinite;

	@keyframes heartbeat {
		0% {
			transform: scale(1);
			opacity: 0;
		}
		50% {
			transform: scale(1.3);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
`;
