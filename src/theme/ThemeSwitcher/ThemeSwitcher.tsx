import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import { Button, ButtonSize } from '../../components/UI/Buttons/Buttons';

const ThemeSwitcher = () => {
	const dispatch = useDispatch();
	return (
		<Button size={ButtonSize.MD} onClick={() => dispatch(toggleTheme())}>
			switch mode
		</Button>
	);
};

export default ThemeSwitcher;
