import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import SearchPage from '../components/SearchPage/SearchPage';
import SingleMoviePage from '../components/SingleMoviePage/SingleMoviePage';
import SeasonsList from '../components/Test/Test';
import Contacts from '../components/Contacts/Contacts';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/test" element={<SeasonsList />} />
			<Route path="/movies" element={<SearchPage />} />
			<Route path={`/movies/:movieId`} element={<SingleMoviePage />} />
			<Route path="/contacts" element={<Contacts />} />
		</Routes>
	);
};

export default AppRoutes;
