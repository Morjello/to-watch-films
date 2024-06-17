import styled from 'styled-components';
import logo from '../../../images/logo1.jpg';

interface StyledLogoProps {
	src: string;
	alt: string;
}

export const StyledLogo = styled.img<StyledLogoProps>`
	width: 52px;
	height: 52px;
	border-radius: 50%;
`;

const Logo = () => {
	return <StyledLogo src={logo} alt="logo" />;
};

export default Logo;
