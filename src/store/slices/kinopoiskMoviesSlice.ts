import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import findMovieOnName from "../async/kinopoisk/findNameOfMovie";
import { IKinopoiskMovie } from "../../interfaces/kinopoiskMovies";

export interface IKinopoiskMovies {
  kinopoiskMovies: IKinopoiskMovie[];
  currentMovie: IKinopoiskMovie | null;
  loading: boolean;
  error: string | null;
}

const initialState: IKinopoiskMovies = {
  kinopoiskMovies: [],
  currentMovie: null,
  loading: false,
  error:  null,
}

const kinopoiskMoviesSlice = createSlice({
  name: 'kinopoiskMovies',
  initialState,
  reducers: {
    setCurrentMovie: (state, action: PayloadAction<IKinopoiskMovie>) => {
      state.currentMovie = action.payload;
    }
  },
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

export const { setCurrentMovie } = kinopoiskMoviesSlice.actions;
export default kinopoiskMoviesSlice.reducer; 