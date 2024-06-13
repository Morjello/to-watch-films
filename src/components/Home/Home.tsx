import { useEffect } from 'react';
import List from '../UI/list/List';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import MovieCard from '../MovieCard/MovieCard';
import getPopularMovies from '../../store/async/kinobox/getPopularMovies';
import { TextError, TextLoading } from '../UI/text/Text';

const Home = () => {
	const dispatch = useAppDispatch();
	const { popularMovies, loading, error } = useAppSelector(
		(state) => state.popularMovies,
	);

	useEffect(() => {
		dispatch(getPopularMovies());
	}, [dispatch]);

	return (
		<>
			{loading && <TextLoading>Loading...</TextLoading>}
			{error && <TextError>Loading...</TextError>}
			<List
				items={popularMovies}
				renderItems={(item) => <MovieCard key={item.id} item={item} />}
			></List>
		</>
	);
};

export default Home;
