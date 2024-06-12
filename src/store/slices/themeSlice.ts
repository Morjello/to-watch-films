import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme/theme";
import { DefaultTheme } from "styled-components";

interface IThemeState {
  theme: DefaultTheme;
  isLightTheme: boolean
}

const themeState: IThemeState = {
  theme: lightTheme,
  isLightTheme: true
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
      state.theme = state.isLightTheme ?  lightTheme : darkTheme;
    }
  }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;