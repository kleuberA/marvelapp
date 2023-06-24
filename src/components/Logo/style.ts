import styled from "styled-components";

export const Logo = styled.h1`
	font-size: 2rem;
	font-weight: 700;
	color: white;
	background-color: red;
	padding: 0 1rem;
	border: 2px solid transparent;
	transition: all 0.2s ease-in-out;
	&:hover {
		color: red;
		border: 2px solid red;
		background-color: transparent;
	}
	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0 0.5rem;
	}
`;
