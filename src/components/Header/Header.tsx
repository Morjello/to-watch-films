import { FC } from 'react';
import ThemeSwitcher from '../../theme/ThemeSwitcher/ThemeSwitcher';
import { StyledHeader } from './StyledHeader';
import NavBar from '../NavBar/NavBar';
import Logo from '../UI/logo/Logo';

const Header: FC = () => {
	return (
		<StyledHeader>
			<Logo />
			<ThemeSwitcher />
			<NavBar />
		</StyledHeader>
	);
};

export default Header;
