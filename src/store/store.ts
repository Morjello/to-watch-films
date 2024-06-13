import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import popularMoviesSlice from "./slices/popularMoviesSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    popularMovies: popularMoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;