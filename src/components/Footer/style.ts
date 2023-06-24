import styled from "styled-components";

export const Container = styled.div`
	border-top: 2px solid #f56565;
	height: 6rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: rgb(9 9 11);
	text-align: center;
`;
export const Title = styled.h1`
	color: white;
	font-size: 1.5rem;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
