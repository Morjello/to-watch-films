import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import findMovieOnName, { IKinopoiskMovie } from "../async/kinopoisk/findNameOfMovie";

export interface IKinopoiskMovies {
  kinopoiskMovies: IKinopoiskMovie[];
  loading: boolean;
  error: string | null;
}

const initialState: IKinopoiskMovies = {
  kinopoiskMovies: [],
  loading: false,
  error:  null,
}

const kinopoiskMoviesSlice = createSlice({
  name: 'kinopoiskMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findMovieOnName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findMovieOnName.fulfilled, (state, action: PayloadAction<IKinopoiskMovie[]>) => {
        state.loading = false;
        state.kinopoiskMovies = action.payload;
      })
      .addCase(findMovieOnName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default kinopoiskMoviesSlice.reducer; 