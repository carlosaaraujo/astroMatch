import styled from "styled-components";
import { shakeHorizontal } from "../../Style";

export const ContainerMatches = styled.div`
	width: 100%;
	height: 100%;

	overflow-x: hidden;

	::-webkit-scrollbar-track {
		border: none;
	}

	::-webkit-scrollbar {
		width: 7px;
		background-color: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: #74b9ff;
		border-radius: 10px;
	}

	ul {
		animation: ${shakeHorizontal} 0.9s linear both;
		li {
			display: flex;
			align-items: center;

			padding: 5px;
			transition: background-color 0.2s;

			border-radius: 5px;
			border: 1px solid #45a4f7;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
				rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

			margin: 10px;
			list-style: none;

			img {
				width: 70px;
				height: 70px;

				object-fit: cover;
				border-radius: 50%;
			}

			p {
				margin-left: 15px;
			}

			:hover {
				cursor: pointer;
				background-color: #45a4f7;
			}
		}
	}
`;
