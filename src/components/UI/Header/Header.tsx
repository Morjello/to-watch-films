import { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.secondary};
	height: ${({ theme }) => theme.sizes.header.height}px;
	z-index: ${({ theme }) => theme.order.header};
`;

const Header: FC = (props) => {
	return <StyledHeader {...props} />;
};

export default Header;
