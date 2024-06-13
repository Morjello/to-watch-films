import Home from '../Home/Home';
import { Button, ButtonSize } from '../UI/basicButton/BasicButton';
import Header from './../Header/Header';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<Button size={ButtonSize.MD}>Кликни</Button>
		</>
	);
};

export default App;
