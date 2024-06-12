import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';

const ThemeSwitcher = () => {
	const dispatch = useDispatch();
	return <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>;
};

export default ThemeSwitcher;
