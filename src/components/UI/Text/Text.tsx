import { FC } from 'react';
import styled, { css } from 'styled-components';

const normalFontStyles = css`
	font-size: 12px;
	line-height: 14px;
	font-weight: 500;
`;

interface TextProps {
	primary: boolean;
}
const StyledNormalText = styled.p<TextProps>`
	${normalFontStyles};
	color: ${({ primary }) => (primary ? '#424242' : '4b4b4b')};
`;

const Text: FC = () => {
	return <StyledNormalText primary />;
};

export default Text;
