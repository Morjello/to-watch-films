import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export enum ButtonSize {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	FULL = 'full',
}

// Interface for button properties
export interface StyledButtonProps {
	size: ButtonSize;
}

// Styled-component for the button
const StyledButton = styled.button<StyledButtonProps>`
	border: none;
	cursor: pointer;
	font-size: 16px;
	padding: 14px;
	border-radius: 25px;
	color: ${({ theme }) => theme.colors.font};
	background-color: ${({ theme }) => theme.colors.bgbth};
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
			case ButtonSize.FULL:
				return '100%';
			default:
				return '150px';
		}
	}};
	&:hover {
		opacity: 0.8;
	}
`;

const StyledWatchButton = styled(StyledButton)`
	background-color: ${({ theme }) => theme.colors.bgwatch};
`;

interface ButtonProps extends PropsWithChildren<StyledButtonProps> {
	disabled?: boolean;
	onClick?: () => void;
	text?: string;
}

// Button component
export const Button: FC<ButtonProps> = ({
	children,
	size = ButtonSize.MD,
	onClick,
}) => (
	<StyledButton size={size} onClick={onClick}>
		{children}
	</StyledButton>
);
export const SubmitButton: FC<ButtonProps> = ({
	children,
	size = ButtonSize.MD,
	onClick,
}) => (
	<StyledButton size={size} onClick={onClick}>
		{children}
	</StyledButton>
);

export const WatchButton: FC<ButtonProps> = ({
	children,
	size = ButtonSize.MD,
	onClick,
}) => (
	<StyledWatchButton size={size} onClick={onClick}>
		{children}
	</StyledWatchButton>
);
