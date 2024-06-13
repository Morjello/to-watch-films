import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { basicError } from "../../../constants/errors";
import { OK } from "../../../constants/statuses";
import { kinoboxPopularMovies } from "../../../services/kinobox/data";

export interface IPopularMovie {
  id: string | null;
  title: string | null;
  alternativeTitle: string | null;
  type: string | null;
  year: number | null;
  rating: string | null | undefined;
  posterUrl: string;
  countries: string[] | null;
  genres: string[] | null;
}

const getPopularMovies = createAsyncThunk(
  'movie/getPopularMovie',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get<IPopularMovie[]>(kinoboxPopularMovies);

      if (response.status !== OK) {
        throw new Error(basicError)
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

export default getPopularMovies;