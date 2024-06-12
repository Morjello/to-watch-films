import { FC } from 'react';
import styled from 'styled-components';

interface StyledBasicButtonProps {}

const StyledBasicButton = styled.button<StyledBasicButtonProps>`
	border: none;
	cursor: poiner;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.bg};
	width: 150px;
	padding: 15px;
	border-radius: 15px;
`;

interface BasicButtonProps {
	children?: string;
	onClick?: () => void;
}

const BasicButton: FC<BasicButtonProps> = (props) => {
	return <StyledBasicButton {...props} />;
};

export default BasicButton;
