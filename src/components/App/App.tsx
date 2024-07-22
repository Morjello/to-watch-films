import AppRoutes from '../../routes/Routes';
import Footer from '../Footer/Footer';
import { Divider } from '../UI/divider/Divider';
import Header from './../Header/Header';
import { StyledApp } from './StyledApp';

const App = () => {
	return (
		<StyledApp>
			<Header />
			<Divider />
			<AppRoutes />
			<Footer />
		</StyledApp>
	);
};

export default App;
