import { FC } from 'react';
import { INavLink } from '../../../interfaces/navLinks';
import { StyledNavLink } from './StyledNavLink';
import { Link } from 'react-router-dom';
import './NavLink.scss';

interface NavLinkProps {
	item: INavLink;
}

const NavLink: FC<NavLinkProps> = ({ item }) => {
	return (
		<>
			<Link to={item.path} className="link">
				<StyledNavLink>{item.name}</StyledNavLink>;
			</Link>
		</>
	);
};

export default NavLink;
