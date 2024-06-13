import styled from 'styled-components';

interface StyledTitleProps {
	weight?: 200 | 300 | 400 | 500 | 600 | 700;
}

export const Title1 = styled.h1<StyledTitleProps>`
	font-size: 28px;
	font-weight: ${({ weight = 700 }) => weight};
`;
export const Title2 = styled.h1<StyledTitleProps>`
	font-size: 20px;
	font-weight: ${({ weight = 700 }) => weight};
`;
export const Title3 = styled.h1<StyledTitleProps>`
	font-size: 16px;
	font-weight: ${({ weight = 700 }) => weight};
`;
