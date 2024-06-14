import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { basicError } from "../../../constants/errors";
import { OK } from "../../../constants/statuses";
import { kinopoiskMovies } from "../../../services/kinopoisk/data";

export interface IKinopoiskMovie {
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

const findMovieOnName = createAsyncThunk<IKinopoiskMovie[], undefined, {rejectValue: string}>(
  'movie/getKinopoiskMovie',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IKinopoiskMovie[]>(kinopoiskMovies);

      if (response.status !== OK) {
        throw new AxiosError(basicError);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error ='');
    }
  }
);

export default findMovieOnName;