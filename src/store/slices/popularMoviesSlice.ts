import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getPopularMovies, { IPopularMovie } from "../async/kinobox/getPopularMovies";

export interface IPopularMovies {
  popularMovies: IPopularMovie[];
  loading: boolean;
  error: string | null;
}

const initialState: IPopularMovies = {
  popularMovies: [],
  loading: false,
  error:  null,
}

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
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

export default popularMoviesSlice.reducer; 