import { ContainerElements } from "./../../components/Nav/style";
import styled, { keyframes } from "styled-components";

export const ContainerLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 11rem);
	background-color: rgb(9 9 11);
`;

export const Container = styled.div`
	background-color: rgb(9 9 11);
`;
export const Title = styled.h1`
	color: white;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem 0;
`;

export const ContainerCharacters = styled.div`
	display: flex;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	background-color: rgb(9 9 11);
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.75rem;
`;

export const ContainerElementsCharacter = styled.div`
	background-color: rgb(9 9 11);
	margin: auto;
`;
export const TitleNameCharacter = styled.h2`
	color: white;
	font-size: 1rem;
`;

export const ImageCharacter = styled.img`
	width: 18rem;
	height: 20rem;
`;

export const ContainerNumberPage = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2.5rem;
	justify-content: center;
	margin-top: 0.75rem;
	padding: 0.5rem;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
`;

export const ButtonPrevious = styled.button`
	background-color: rgb(39 39 42);
	height: 3.5rem;
	width: 8rem;
	border-radius: 0.5rem;
	color: white;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgb(63 63 70);
	}
`;
export const ButtonNext = styled.button`
	background-color: rgb(39 39 42);
	height: 3.5rem;
	width: 8rem;
	border-radius: 0.5rem;
	color: white;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgb(63 63 70);
	}
`;

export const TitleNumberPage = styled.span`
	color: white;
	font-size: 1rem;
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const ElementLoading = styled.div`
	animation: ${spin} 1s linear infinite;
	border-radius: 9999px;
	height: 4rem;
	width: 4rem;
	border-top: 2px solid #f6e05e;
	border-bottom: 2px solid #f6e05e;
`;
