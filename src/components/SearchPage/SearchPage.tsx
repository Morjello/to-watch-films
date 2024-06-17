import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import KinopoiskCard from '../KinopoiskCard/KinopoiskCard';
import SearchForm from '../SearchForm/SearchForm';
import List from '../UI/list/List';
import { StyledSearchPage } from './StyledSearchPage';
import findMovieOnName from '../../store/async/kinopoisk/findNameOfMovie';

const SearchPage = () => {
	const dispatch = useAppDispatch();
	const { searchQuery } = useAppSelector((state) => state.searchQuery);
	const { kinopoiskMovies } = useAppSelector((state) => state.kinopoiskMovies);

	const fetchMoviesByName = useCallback(() => {
		if (searchQuery && kinopoiskMovies.length === 0) {
			dispatch(findMovieOnName(searchQuery));
		}
	}, [dispatch, searchQuery, kinopoiskMovies.length]);

	useEffect(() => {
		fetchMoviesByName();
	}, [fetchMoviesByName]);

	return (
		<StyledSearchPage>
			<SearchForm />
			<List
				items={kinopoiskMovies}
				renderItems={(item) => <KinopoiskCard key={item.id} item={item} />}
			/>
		</StyledSearchPage>
	);
};

export default React.memo(SearchPage);
