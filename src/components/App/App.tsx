import Home from '../Home/Home';
import { Button, ButtonSize } from '../UI/Buttons/Buttons';
import { Divider } from '../UI/divider/Divider';
import Header from './../Header/Header';
import { StyledApp } from './StyledApp';

const App = () => {
	return (
		<StyledApp>
			<Header />
			<Divider />
			<Home />
			<Button size={ButtonSize.MD}>Кликни</Button>
		</StyledApp>
	);
};

export default App;
