import AppRoutes from '../../routes/Routes';
import { Divider } from '../UI/divider/Divider';
import Header from './../Header/Header';
import { StyledApp } from './StyledApp';

const App = () => {
	return (
		<StyledApp>
			<Header />
			<Divider />
			<AppRoutes />
		</StyledApp>
	);
};

export default App;
