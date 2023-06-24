import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	background-color: rgb(9 9 11);
	min-height: calc(100vh - 11rem);
`;

export const Form = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
`;
export const InputSearch = styled.input`
	outline: none;
	border: 2px solid rgb(39 39 42);
	border-radius: 0.5rem 0 0 0.5rem;
	padding-left: 0.5rem;
	height: 3rem;
	width: 20rem;
	background-color: rgb(24 24 27);
	color: rgb(161 161 170);
`;
export const ButtonSearch = styled.button`
	height: 3rem;
	border-radius: 0 0.5rem 0.5rem 0;
	border: none;
	width: 3rem;
	font-size: 1.5rem;
	background-color: rgb(24 24 27);
	color: rgb(161 161 170);
	border: 2px solid rgb(39 39 42);
`;
export const ContainerHerois = styled.div`
	height: 100%;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;
export const ContainerInfoBusca = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 16rem);
`;
export const TitleInfoBusca = styled.p`
	color: white;
	font-size: 1.5rem;
`;
export const ContainerHeroi = styled.div`
	display: flex;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.75rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;
