import { FC } from 'react';
import styled from 'styled-components';

interface StyledBasicButtonProps {}

const StyledBasicButton = styled.button<StyledBasicButtonProps>`
	border: none;
	cursor: poiner;
	width: 150px;
	padding: 15px;
	border-radius: 15px;
`;

const BasicButton: FC = (props) => {
	return <StyledBasicButton {...props} />;
};

export default BasicButton;
