import { FC } from 'react';
import { IPopularMovie } from '../../store/async/kinobox/getPopularMovies';
import { Title3 } from '../UI/title/Title';
import { Flex } from '../UI/flex/Flex';
import { StyledCell, StyledImage, StyledMovieCard } from './StyledMovieCard';
import { Text } from '../UI/text/Text';

export interface IMovieCard {
	item: IPopularMovie;
}

const MovieCard: FC<IMovieCard> = ({ item }) => {
	return (
		<StyledMovieCard>
			<StyledImage src={item.posterUrl} alt="poster" />
			<StyledCell>
				<Title3>{item.title}</Title3>
				<Text>{item.year}</Text>
			</StyledCell>
		</StyledMovieCard>
	);
};

export default MovieCard;
