import { createSlice } from "@reduxjs/toolkit";

export interface ISearchQuery {
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: ISearchQuery = {
  searchQuery: '',
  loading: false,
  error:  null,
}

const searchQuerySlice = createSlice({
  name: 'SearchQuery',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const {setSearchQuery} = searchQuerySlice.actions;
export default searchQuerySlice.reducer; 