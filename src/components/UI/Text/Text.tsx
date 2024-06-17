import styled, { css } from 'styled-components';

const normalFontStyles = css`
	font-size: 14px;
	line-height: 14px;
	font-weight: 500;
`;

interface TextProps {
	primary?: boolean;
}

export const Text = styled.p<TextProps>`
	${normalFontStyles};
	color: ${({ theme }) => theme.colors.primary};
`;

export const TextLoading = styled.p<TextProps>`
	${normalFontStyles};
	color: ${({ theme }) => theme.colors.secondary};
`;

export const TextError = styled.p<TextProps>`
	${normalFontStyles};
	color: ${({ theme }) => theme.colors.danger};
`;
