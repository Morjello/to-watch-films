import { IPopularMovies } from "../store/slices/popularMoviesSlice";

interface ISetError {
  state: IPopularMovies;
  action?: any;
}

export const setError = ({state, action}: ISetError) => {
  state.loading = false;
  state.error = action.payload as string;
}