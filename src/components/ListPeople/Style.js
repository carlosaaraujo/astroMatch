import styled from "styled-components";
import { shakeHorizontal } from "../../Style";

export const ContainerListPeople = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	animation: ${shakeHorizontal} 0.9s linear both;

	.card-box {
		display: flex;
		align-items: center;

		margin-top: 10px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
			rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

		.text-box {
			width: 350px;
			min-height: 432px;

			display: flex;
			justify-content: flex-end;
			flex-direction: column;

			padding: 10px;
			position: absolute;

			border-radius: 5px;
			background: linear-gradient(
				to top,
				rgba(25, 42, 86, 0.95),
				transparent
			);

			transition: all 0.5s ease;

			border: 1px solid rgba(69, 164, 247, 0.5);
			color: #ffff;

			h2 {
				font-weight: 700;
				margin-bottom: 5px;
			}

			p {
				font-weight: 300;
			}
		}
	}
`;

export const ImageProfile = styled.img`
	width: 350px;
	height: 430px;

	border-radius: 5px;
	object-fit: cover;

	transition: all 0.7s ease-out;

	${(props) =>
		props.imageEffect &&
		"transform: translate(15rem, 5rem) rotate(15deg)"}
`;

export const ContainerButtons = styled.div`
	width: 100%;
	height: 50px;
	margin-top: 10px;

	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const LeftButton = styled.button`
	width: 45px;
	height: 45px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	border: none;

	border: 1px solid #45a4f7;
	background-color: transparent;

	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transition: background-color 0.2s;

	img {
		width: 32px;

		transition: transform 0.2s;

		:hover {
			transform: scale(0.8);
		}
	}

	:hover {
		cursor: pointer;
		background-color: rgba(69, 164, 247, 0.2);
	}
`;

export const RightButton = styled.button`
	width: 45px;
	height: 45px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	border: none;

	border: 1px solid #45a4f7;
	background-color: transparent;

	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transition: background-color 0.2s;

	img {
		width: 32px;

		transition: transform 0.2s;

		:hover {
			transform: scale(0.8);
		}
	}

	:hover {
		cursor: pointer;
		background-color: rgba(69, 164, 247, 0.2);
	}
`;

export const ResetMatches = styled.div`
	width: 100%;
	height: 50vh;

	display: flex;
	justify-content: center;

	align-items: center;
	flex-direction: column;

	animation: ${shakeHorizontal} 0.9s linear both;

	img {
		width: 60px;
		animation: heartbeat 1s linear infinite;

		@keyframes heartbeat {
			0% {
				transform: scale(0.75);
			}
			20% {
				transform: scale(1);
			}
			40% {
				transform: scale(0.75);
			}
			60% {
				transform: scale(1);
			}
			80% {
				transform: scale(0.75);
			}
			100% {
				transform: scale(0.75);
			}
		}
	}

	h1 {
		font-size: 18px;
		text-align: center;
	}
`;
