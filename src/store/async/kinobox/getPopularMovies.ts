import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { basicError } from "../../../constants/errors";
import { OK } from "../../../constants/statuses";
import { kinoboxPopularMovies } from "../../../services/kinobox/data";

export interface IPopularMovie {
  id: string;
  title: string;
  alternativeTitle: string;
  type: string;
  year: number;
  rating: string;
  posterUrl: string;
  countries: string[];
  genres: string[];
}

const getPopularMovies = createAsyncThunk<IPopularMovie[], undefined, {rejectValue: string}>(
  'movie/getPopularMovie',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IPopularMovie[]>(kinoboxPopularMovies);

      if (response.status !== OK) {
        throw new AxiosError(basicError);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error ='');
    }
  }
);

export default getPopularMovies;