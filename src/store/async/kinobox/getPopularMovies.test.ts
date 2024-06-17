import axios, { AxiosError } from 'axios';
import getPopularMovies, { IPopularMovie } from './getPopularMovies';
import { OK } from '../../../constants/statuses';
import { basicError } from '../../../constants/errors';

jest.mock('axios');

describe('getPopularMovies', () => {
  it('should return an array of popular movies on success', async () => {
    const popularMovies: IPopularMovie[] = [
      {
        id: '1',
        title: 'Movie 1',
        alternativeTitle: 'Alt Title 1',
        type: 'movie',
        year: 2020,
        rating: 'PG-13',
        posterUrl: 'https://example.com/poster1.jpg',
        countries: ['USA'],
        genres: ['Action', 'Adventure'],
      },
      {
        id: '2',
        title: 'Movie 2',
        alternativeTitle: 'Alt Title 2',
        type: 'movie',
        year: 2021,
        rating: 'R',
        posterUrl: 'https://example.com/poster2.jpg',
        countries: ['UK'],
        genres: ['Comedy', 'Drama'],
      },
    ];

    (axios.get as jest.Mock).mockResolvedValue({
      status: OK,
      data: popularMovies,
    });

    const dispatch = jest.fn();
    const thunk = getPopularMovies();
    const result = await thunk(dispatch, jest.fn(), undefined);

    expect(result.payload).toEqual(popularMovies);
    expect(dispatch).toHaveBeenCalledWith({ type: 'movie/getPopularMovie/pending' });
  });

  it('should return an error on failure', async () => {
    const error = new AxiosError(basicError);

    (axios.get as jest.Mock).mockRejectedValue(error);

    const dispatch = jest.fn();
    const thunk = getPopularMovies();
    const result = await thunk(dispatch, jest.fn(), undefined);

    expect(result.payload).toEqual(error);
    expect(dispatch).toHaveBeenCalledWith({ type: 'movie/getPopularMovie/rejected', payload: error });
  });
});
