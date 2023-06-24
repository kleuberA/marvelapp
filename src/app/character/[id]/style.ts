import { ImageCharacter } from "./../../(home)/style";
import styled, { keyframes } from "styled-components";

export const Container = styled.div``;
export const ContainerCharacter = styled.div`
	margin: auto;
	background-color: rgb(9 9 11);
	min-height: calc(100vh - 11rem);
	display: flex;
	padding: 2rem 0;
`;
export const NameCharacter = styled.h2`
	color: white;
`;
export const CharacterDescription = styled.p`
	color: white;
	margin-bottom: 1rem;
`;
export const CharacterNoDescription = styled.p`
	color: white;
	margin-bottom: 1rem;
`;
export const ImageCharacterStyle = styled(ImageCharacter)`
	border-radius: 0.5rem;
`;
export const TitleSection = styled.h1`
	color: white;
	font-size: 1rem;
`;
export const TagName = styled.p`
	color: rgb(161 161 170);
	font-size: 0.75rem;
	background-color: rgb(39 39 42);
	width: fit-content;
	padding: 0.25rem;
	border-radius: 0.75rem;
`;
export const TagNoSection = styled.p`
	color: white;
`;
export const ContainerSection = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	margin: 1rem 0;
`;

export const ContainerInfoCharacter = styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ContainerInfoSection = styled.div``;

export const ContainerLoading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 11rem);
	background-color: rgb(9 9 11);
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
