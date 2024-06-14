import { FC } from 'react';
import { Logo } from '../UI/logo/Logo';
import ThemeSwitcher from '../../theme/ThemeSwitcher/ThemeSwitcher';
import { StyledHeader } from './StyledHeader';

const Header: FC = () => {
	return (
		<StyledHeader>
			<Logo>Logo</Logo>
			<ThemeSwitcher />
		</StyledHeader>
	);
};

export default Header;
