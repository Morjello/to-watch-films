import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import popularMoviesSlice from "./slices/popularMoviesSlice";
import searchQuerySlice from "./slices/searchQuerySlice";
import kinopoiskMoviesSlice from "./slices/kinopoiskMoviesSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    popularMovies: popularMoviesSlice,
    searchQuery: searchQuerySlice,
    kinopoiskMovies: kinopoiskMoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;