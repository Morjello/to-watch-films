import { FC } from 'react';
import { StyledMovieImage } from '../../UI/image/MovieImage/MovieImage';
import { Text } from '../../UI/text/Text';
import { Title2 } from '../../UI/title/Title';
import { IKinopoiskMovie } from '../../../interfaces/kinopoiskMovies';
import {
	StyledSingleMovieContainer,
	StyledSingleMovieInfo,
} from './StyledSingleMovieInfo';

interface SingleMovieInfoProps {
	item: IKinopoiskMovie;
}

const SingleMovieInfo: FC<SingleMovieInfoProps> = ({ item }) => {
	return (
		<StyledSingleMovieInfo>
			<StyledMovieImage src={item.poster || ''} alt="poster" />
			<StyledSingleMovieContainer>
				<Title2>{item.name}</Title2>
				<Text>{item.description}</Text>
			</StyledSingleMovieContainer>
		</StyledSingleMovieInfo>
	);
};

export default SingleMovieInfo;
