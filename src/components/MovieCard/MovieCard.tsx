import React, { FC, useCallback } from 'react';
import { IPopularMovie } from '../../store/async/kinobox/getPopularMovies';
import { Title3 } from '../UI/title/Title';
import { StyledCell, StyledImage, StyledMovieCard } from './StyledMovieCard';
import { Text } from '../UI/text/Text';
import { ButtonSize, WatchButton } from '../UI/Buttons/Buttons';
import { useAppDispatch } from '../../hooks/redux';
import { setCurrentMovie } from '../../store/slices/kinopoiskMoviesSlice';
import { useNavigate } from 'react-router-dom';

export interface IMovieCardProps {
	item: IPopularMovie;
}

const MovieCard: FC<IMovieCardProps> = ({ item }) => {
	// const dispatch = useAppDispatch();
	// const navigate = useNavigate();

	// const handleClick = useCallback(() => {
	// 	dispatch(setCurrentMovie(item));
	// 	navigate(`movies/${item.id}`, { replace: false });
	// }, [dispatch, navigate, item]);

	return (
		<StyledMovieCard>
			<StyledImage src={item.posterUrl} alt="poster" />
			<StyledCell>
				<Title3>{item.title}</Title3>
				<Text>{item.year}</Text>
				<WatchButton size={ButtonSize.FULL}>Смотреть</WatchButton>
			</StyledCell>
		</StyledMovieCard>
	);
};

export default React.memo(MovieCard);
