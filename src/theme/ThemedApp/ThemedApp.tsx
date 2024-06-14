import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styled, { ThemeProvider } from 'styled-components';
import App from '../../components/App/App';
import Global from '../../styles/global';

const StyledThemedApp = styled.div`
	background-color: ${({ theme }) => theme.colors.bg};
	color: ${({ theme }) => theme.colors.font};
	margin: auto;
	padding: 0 120px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ThemedApp: FC = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<ThemeProvider theme={theme}>
			<StyledThemedApp>
				<Global />
				<App />
			</StyledThemedApp>
		</ThemeProvider>
	);
};

export default ThemedApp;
