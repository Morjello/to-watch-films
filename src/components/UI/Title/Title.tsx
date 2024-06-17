import styled from 'styled-components';

interface StyledTitleProps {
	weight?: 200 | 300 | 400 | 500 | 600 | 700;
}

export const Title1 = styled.h1<StyledTitleProps>`
	font-size: 28px;
	color: ${({ theme }) => theme.colors.font};
	font-weight: ${({ weight = 700 }) => weight};
`;
export const Title2 = styled.h1<StyledTitleProps>`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.font};
	font-weight: ${({ weight = 700 }) => weight};
`;
export const Title3 = styled.h1<StyledTitleProps>`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.font};
	font-weight: ${({ weight = 700 }) => weight};
`;
