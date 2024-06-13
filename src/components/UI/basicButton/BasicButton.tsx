import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export enum ButtonSize {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}

// Interface for button properties
export interface ButtonProps {
	size: ButtonSize;
}

// Styled-component for the button
const StyledBasicButton = styled.button<ButtonProps>`
	border: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.bg};
	width: ${({ size }) => {
		switch (size) {
			case ButtonSize.XS:
				return '50px';
			case ButtonSize.SM:
				return '100px';
			case ButtonSize.MD:
				return '150px';
			case ButtonSize.LG:
				return '200px';
			default:
				return '150px';
		}
	}};
	padding: 15px;
	border-radius: 15px;
`;

interface BasicButtonProps extends PropsWithChildren<ButtonProps> {
	onClick?: () => void;
}

// BasicButton component
const BasicButton: FC<BasicButtonProps> = ({
	children,
	size = ButtonSize.MD,
	onClick,
}) => (
	<StyledBasicButton size={size} onClick={onClick}>
		{children}
	</StyledBasicButton>
);

// Export the Button component

export const Button = BasicButton;
