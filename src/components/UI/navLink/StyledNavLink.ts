import styled from 'styled-components';
import { INavLink } from '../../../interfaces/navLinks';

export interface NavLinkProps {
	key?: string;
	href?: string;
	item?: INavLink;
	to?: string
}

export const StyledNavLink = styled.a<NavLinkProps>`
	/* min-width: 100px;
	padding: 10px;
	border-radius: 20px;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme.colors.font};
	&:active {
		padding-bottom: 3px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.font};
	} */
`;