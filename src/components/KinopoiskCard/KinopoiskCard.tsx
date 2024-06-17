import { FC, useCallback } from 'react';
import { Title3 } from '../UI/title/Title';
import {
	StyledCell,
	StyledImage,
	StyledKinopoiskCard,
} from './StyledKinopoiskCard';
import { IKinopoiskMovie } from '../../interfaces/kinopoiskMovies';
import { Text } from '../UI/text/Text';
import { ButtonSize, WatchButton } from '../UI/Buttons/Buttons';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentMovie } from '../../store/slices/kinopoiskMoviesSlice';

export interface IKinopoiskCardProps {
	item: IKinopoiskMovie;
}

const KinopoiskCard: FC<IKinopoiskCardProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		dispatch(setCurrentMovie(item));
		navigate(`/movies/${item.id}`, { replace: false });
	}, [dispatch, navigate, item]);

	return (
		<StyledKinopoiskCard>
			<StyledImage src={item.poster} alt="poster" />
			<StyledCell>
				<Title3>{item.name}</Title3>
				<Text>{item.year}</Text>
				<WatchButton size={ButtonSize.FULL} onClick={handleClick}>
					Смотреть
				</WatchButton>
			</StyledCell>
		</StyledKinopoiskCard>
	);
};

export default KinopoiskCard;
