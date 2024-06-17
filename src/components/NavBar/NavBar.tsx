import { navLinks } from '../../constants/navLinks';
import NavList from '../UI/list/NavList';
import NavLink from '../UI/navLink/NavLink';

const NavBar = () => {
	return (
		<NavList
			items={navLinks}
			renderItems={(item) => <NavLink key={item.name} item={item} />}
		></NavList>
	);
};

export default NavBar;
