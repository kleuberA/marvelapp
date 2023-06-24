import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
	border-bottom: 2px solid #f56565;
	height: 5rem;
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: rgb(9 9 11);
`;
export const ContainerElements = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
`;
export const ContainerLogo = styled.div``;
export const ContainerItems = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;
export const StyledLink = styled(Link)`
	color: white;
	font-size: medium;
	font-weight: bold;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: #f56565;
	}
`;
