import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store/store';
import Global from './styles/global';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import baseTheme from './theme/theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={baseTheme}>
					<Global />
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
