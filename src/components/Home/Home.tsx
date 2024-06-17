import React, { useCallback, useEffect, useMemo } from 'react';
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

	const fetchPopularMovies = useCallback(() => {
		if (popularMovies.length === 0) {
			dispatch(getPopularMovies());
		}
	}, [dispatch, popularMovies]);

	useEffect(() => {
		fetchPopularMovies();
	}, [fetchPopularMovies]);

	const renderedMovies = useMemo(() => {
		return popularMovies.map((item) => (
			<MovieCard key={item.id} item={item} />
		));
	}, [popularMovies]);

	return (
		<>
			{loading && <TextLoading>Loading...</TextLoading>}
			{error && <TextError>error...</TextError>}
			<List
				items={popularMovies}
				renderItems={(item) => renderedMovies}
			></List>
		</>
	);
};

export default React.memo(Home);
