import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ThemeProvider } from 'styled-components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import App from '../../components/App/App';
import Global from '../../styles/global';

const ThemedApp: FC = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<ThemeProvider theme={theme}>
			<>
				<Global />
				<ThemeSwitcher />
				<App />
			</>
		</ThemeProvider>
	);
};

export default ThemedApp;
