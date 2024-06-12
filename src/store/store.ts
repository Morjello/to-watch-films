import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;

export default store;