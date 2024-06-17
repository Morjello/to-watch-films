import styled from 'styled-components';

interface StyledMovieImageProps {
	src: string;
	alt: string;
}

export const StyledMovieImage = styled.img<StyledMovieImageProps>`
	cursor: pointer;
	height: 440px;
	max-width: 350px;
	border-radius: 15px;
	background-repeat: no-repeat;
	background-size: cover;
`;
