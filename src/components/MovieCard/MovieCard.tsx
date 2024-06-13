import { FC } from 'react';
import { IPopularMovie } from '../../store/async/kinobox/getPopularMovies';
import { Title3 } from '../UI/title/Title';
import { Flex } from '../UI/flex/Flex';
import { StyledMovieCard } from './styles';

export interface IMovieCard {
	item: IPopularMovie;
}

const MovieCard: FC<IMovieCard> = ({ item }) => {
	return (
		<StyledMovieCard>
			<Flex>
				<Title3>{item.title}</Title3>
			</Flex>
		</StyledMovieCard>
	);
};

export default MovieCard;
