import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieQueryBuilder } from "@openmoviedb/kinopoiskdev_client";
import kp from "../../../services/kinopoisk";
import { IKinopoiskMovie } from "../../../interfaces/kinopoiskMovies";
import { failedToFetchMovies, noDataFound } from "../../../constants/errors";

const findMovieOnName = createAsyncThunk<IKinopoiskMovie[], string, {rejectValue: string}>(
  'movie/searchMovies',
  async (name, { rejectWithValue }) => {
    try {
      const queryBuilder = new MovieQueryBuilder();
      const query = queryBuilder 
        .query(name)
        .paginate(1, 10)
        .build();

      const { data } = await kp.movie.getBySearchQuery(query);

      if (data) {
        console.log(data);
        return data.docs;
      } else {
        return rejectWithValue(noDataFound);
      }
    } catch (error) {
      return rejectWithValue(failedToFetchMovies);
    }
  }
);

export default findMovieOnName;