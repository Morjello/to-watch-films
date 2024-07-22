import React, { useCallback, useEffect, useMemo } from 'react';
import List from '../UI/list/List';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import MovieCard from '../MovieCard/MovieCard';
import getPopularMovies from '../../store/async/kinobox/getPopularMovies';
import { TextError, TextLoading } from '../UI/text/Text';
import { setCurrentPage } from '../../store/slices/popularMoviesSlice';
import Pagination from '../Pagination/Pagination';

const Home = () => {
	const dispatch = useAppDispatch();
	const { popularMovies, loading, error, currentPage, moviesPerPage } =
		useAppSelector((state) => state.popularMovies);

	const fetchPopularMovies = useCallback(() => {
		if (popularMovies.length === 0) {
			dispatch(getPopularMovies());
		}
	}, [dispatch, popularMovies]);

	useEffect(() => {
		fetchPopularMovies();
	}, [fetchPopularMovies]);

	const renderedMovies = useMemo(() => {
		const startIndex = (currentPage - 1) * moviesPerPage;
		const endIndex = startIndex + moviesPerPage;

		return popularMovies.slice(startIndex, endIndex);
	}, [popularMovies, currentPage, moviesPerPage]);

	const handlePageChange = (newPage: number) => {
		dispatch(setCurrentPage(newPage));
	};

	return (
		<>
			{loading && <TextLoading>Loading...</TextLoading>}
			{error && <TextError>error...</TextError>}
			<List
				items={renderedMovies}
				renderItems={(item) => <MovieCard key={item.id} item={item} />}
			></List>
			<Pagination
				currentPage={currentPage}
				totalItems={popularMovies.length}
				itemsPerPage={moviesPerPage}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default React.memo(Home);
