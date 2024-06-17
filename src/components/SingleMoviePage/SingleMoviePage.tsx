import React, { FC, useCallback } from 'react';
import { StyledSingleMoviePage } from './StyledSingleMoviePage';
import SingleMovieInfo from './SingleMovieInfo/SingleMovieInfo';
import { useAppSelector } from '../../hooks/redux';
import { Button, ButtonSize } from '../UI/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const SingleMoviePage: FC = () => {
	const { currentMovie } = useAppSelector((state) => state.kinopoiskMovies);
	const navigation = useNavigate();

	const handleClick = useCallback(() => {
		navigation(-1);
	}, [navigation]);

	if (!currentMovie) {
		return <div>Loading...</div>;
	}
	return (
		<StyledSingleMoviePage>
			<Button size={ButtonSize.MD} onClick={handleClick}>
				Назад
			</Button>
			<SingleMovieInfo item={currentMovie} />
		</StyledSingleMoviePage>
	);
};

export default React.memo(SingleMoviePage);
