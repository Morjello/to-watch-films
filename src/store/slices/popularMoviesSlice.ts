import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getPopularMovies, { IPopularMovie } from "../async/kinobox/getPopularMovies";

export interface IPopularMovies {
  popularMovies: IPopularMovie[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  moviesPerPage: number;
}

const initialState: IPopularMovies = {
  popularMovies: [],
  loading: false,
  error:  null,
  currentPage: 1,
  moviesPerPage: 20,
}

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action: PayloadAction<IPopularMovie[]>) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentPage } = popularMoviesSlice.actions;
export default popularMoviesSlice.reducer; 